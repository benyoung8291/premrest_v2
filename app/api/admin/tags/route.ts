import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const tags = await prisma.tag.findMany({ orderBy: { name: 'asc' } });
  return NextResponse.json({ tags });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { name, slug } = await request.json();
    const tag = await prisma.tag.create({ data: { name, slug } });
    return NextResponse.json(tag, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create tag';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id, name, slug } = await request.json();
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    const tag = await prisma.tag.update({ where: { id }, data: { name, slug } });
    return NextResponse.json(tag);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update tag';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.tag.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
