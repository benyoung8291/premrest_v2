import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const people = await prisma.person.findMany({
    orderBy: { sortOrder: 'asc' },
  });

  return NextResponse.json({ people });
}

export async function POST(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const person = await prisma.person.create({ data: body });
    return NextResponse.json(person, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create person';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    const body = await request.json();
    const { id, ...data } = body;
    if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

    const person = await prisma.person.update({ where: { id }, data });
    return NextResponse.json(person);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to update person';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { error } = await requireAdmin();
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'ID is required' }, { status: 400 });

  await prisma.person.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
