import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import { requireAdmin } from '../guard';

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  const [resources, people, projects, categories, tags, industries] = await Promise.all([
    prisma.resource.count(),
    prisma.person.count({ where: { isArchived: false } }),
    prisma.project.count(),
    prisma.category.count(),
    prisma.tag.count(),
    prisma.industry.count(),
  ]);

  return NextResponse.json({ resources, people, projects, categories, tags, industries });
}
