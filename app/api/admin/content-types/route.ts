import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const contentTypes = await prisma.contentType.findMany({ orderBy: { sortOrder: 'asc' } });
  return NextResponse.json({ contentTypes });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { name, slug, sortOrder } = await request.json();
    const ct = await prisma.contentType.create({ data: { name, slug, sortOrder: sortOrder || 0 } });
    return NextResponse.json(ct, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create content type';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id, name, slug, sortOrder } = await request.json();
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    const ct = await prisma.contentType.update({ where: { id }, data: { name, slug, sortOrder } });
    return NextResponse.json(ct);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update content type';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.contentType.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
