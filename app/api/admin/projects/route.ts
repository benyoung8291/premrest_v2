import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const projects = await prisma.project.findMany({
    include: {
      photos: { orderBy: { sortOrder: 'asc' } },
      managers: { include: { person: { select: { id: true, name: true } } } },
    },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ projects });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const { name, slug, summary, description, featuredImageUrl, managerIds, photos } = body;

    const project = await prisma.project.create({
      data: {
        name,
        slug,
        summary,
        description,
        featuredImageUrl,
        managers: managerIds?.length
          ? { create: managerIds.map((id: string) => ({ personId: id })) }
          : undefined,
        photos: photos?.length
          ? { create: photos.map((p: { url: string; alt?: string }, i: number) => ({ url: p.url, alt: p.alt, sortOrder: i })) }
          : undefined,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create project';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const { id, name, slug, summary, description, featuredImageUrl, managerIds, photos } = body;
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    await prisma.projectManager.deleteMany({ where: { projectId: id } });
    await prisma.projectPhoto.deleteMany({ where: { projectId: id } });

    const project = await prisma.project.update({
      where: { id },
      data: {
        name,
        slug,
        summary,
        description,
        featuredImageUrl,
        managers: managerIds?.length
          ? { create: managerIds.map((pid: string) => ({ personId: pid })) }
          : undefined,
        photos: photos?.length
          ? { create: photos.map((p: { url: string; alt?: string }, i: number) => ({ url: p.url, alt: p.alt, sortOrder: i })) }
          : undefined,
      },
    });

    return NextResponse.json(project);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update project';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
