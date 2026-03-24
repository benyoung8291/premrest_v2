import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const search = searchParams.get('search') || '';
  const typeId = searchParams.get('type') || '';

  const where = {
    ...(search ? { name: { contains: search } } : {}),
    ...(typeId ? { contentTypeId: typeId } : {}),
  };

  const [resources, total] = await Promise.all([
    prisma.resource.findMany({
      where,
      include: {
        category: true,
        contentType: true,
        authors: { include: { person: { select: { id: true, name: true } } } },
        tags: { include: { tag: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.resource.count({ where }),
  ]);

  return NextResponse.json({ resources, total, page, totalPages: Math.ceil(total / limit) });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const { name, slug, summary, content, featuredImageUrl, videoUrl, videoThumbnail, categoryId, contentTypeId, authorIds, tagIds, isDraft } = body;

    const resource = await prisma.resource.create({
      data: {
        name,
        slug,
        summary,
        content,
        featuredImageUrl,
        videoUrl,
        videoThumbnail,
        categoryId: categoryId || null,
        contentTypeId: contentTypeId || null,
        isDraft: isDraft || false,
        publishedAt: isDraft ? null : new Date(),
        authors: authorIds?.length ? { create: authorIds.map((id: string) => ({ personId: id })) } : undefined,
        tags: tagIds?.length ? { create: tagIds.map((id: string) => ({ tagId: id })) } : undefined,
      },
    });

    return NextResponse.json(resource, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create resource';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const { id, name, slug, summary, content, featuredImageUrl, videoUrl, videoThumbnail, categoryId, contentTypeId, authorIds, tagIds, isDraft, isArchived } = body;

    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    // Update authors and tags by deleting and recreating
    await prisma.resourceAuthor.deleteMany({ where: { resourceId: id } });
    await prisma.resourceTag.deleteMany({ where: { resourceId: id } });

    const resource = await prisma.resource.update({
      where: { id },
      data: {
        name,
        slug,
        summary,
        content,
        featuredImageUrl,
        videoUrl,
        videoThumbnail,
        categoryId: categoryId || null,
        contentTypeId: contentTypeId || null,
        isDraft: isDraft ?? false,
        isArchived: isArchived ?? false,
        authors: authorIds?.length ? { create: authorIds.map((pid: string) => ({ personId: pid })) } : undefined,
        tags: tagIds?.length ? { create: tagIds.map((tid: string) => ({ tagId: tid })) } : undefined,
      },
    });

    return NextResponse.json(resource);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update resource';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.resource.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
