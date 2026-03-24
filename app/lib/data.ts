import { prisma } from './prisma';

export async function getResourceBySlug(slug: string) {
  return prisma.resource.findUnique({
    where: { slug },
    include: {
      category: true,
      contentType: true,
      authors: { include: { person: { select: { id: true, name: true, title: true, slug: true, photoUrl: true } } } },
      tags: { include: { tag: true } },
    },
  });
}

export async function getPublishedResources(typeSlug?: string) {
  const contentType = typeSlug
    ? await prisma.contentType.findUnique({ where: { slug: typeSlug } })
    : null;

  return prisma.resource.findMany({
    where: {
      isDraft: false,
      isArchived: false,
      ...(contentType ? { contentTypeId: contentType.id } : {}),
    },
    include: {
      category: true,
      contentType: true,
      authors: { include: { person: { select: { id: true, name: true, slug: true, photoUrl: true } } } },
      tags: { include: { tag: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getPersonBySlug(slug: string) {
  return prisma.person.findUnique({
    where: { slug },
    include: {
      authoredResources: {
        include: {
          resource: {
            include: { contentType: true, category: true },
          },
        },
      },
    },
  });
}

export async function getPublishedPeople() {
  return prisma.person.findMany({
    where: { isDraft: false, isArchived: false },
    orderBy: { sortOrder: 'asc' },
  });
}

export async function getProjectBySlug(slug: string) {
  return prisma.project.findUnique({
    where: { slug },
    include: {
      photos: { orderBy: { sortOrder: 'asc' } },
      managers: { include: { person: { select: { id: true, name: true, title: true, slug: true, photoUrl: true } } } },
    },
  });
}

export async function getPublishedProjects() {
  return prisma.project.findMany({
    where: { isDraft: false, isArchived: false },
    include: {
      photos: { orderBy: { sortOrder: 'asc' }, take: 1 },
      managers: { include: { person: { select: { id: true, name: true, slug: true } } } },
    },
    orderBy: { createdAt: 'desc' },
  });
}

export async function getAllCategories() {
  return prisma.category.findMany({ orderBy: { name: 'asc' } });
}

export async function getAllTags() {
  return prisma.tag.findMany({ orderBy: { name: 'asc' } });
}

export async function getAllIndustries() {
  return prisma.industry.findMany({ orderBy: { name: 'asc' } });
}
