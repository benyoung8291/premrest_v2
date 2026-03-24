import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const industries = await prisma.industry.findMany({ orderBy: { name: 'asc' } });
  return NextResponse.json({ industries });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { name, slug } = await request.json();
    const industry = await prisma.industry.create({ data: { name, slug } });
    return NextResponse.json(industry, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create industry';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const { id, name, slug } = await request.json();
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    const industry = await prisma.industry.update({ where: { id }, data: { name, slug } });
    return NextResponse.json(industry);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update industry';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.industry.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
