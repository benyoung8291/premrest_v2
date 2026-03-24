import 'dotenv/config';
import bcrypt from 'bcryptjs';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

interface WebflowItem {
  id: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: Record<string, unknown>;
}

function readJson(filename: string): WebflowItem[] {
  const filePath = path.join(process.cwd(), 'cms-data', filename);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

async function main() {
  // Dynamic imports for ESM modules
  const { PrismaClient } = await import('../generated/prisma/client.js');
  const { PrismaLibSql } = await import('@prisma/adapter-libsql');
  const { createClient } = await import('@libsql/client');

  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
  const libsql = createClient({ url: `file:${dbPath}` });
  const adapter = new PrismaLibSql(libsql);
  const prisma = new PrismaClient({ adapter }) as any;

  console.log('Seeding database...');

  // ─── Create admin user ───────────────────────────────────────────────────

  const adminPassword = await bcrypt.hash('admin123', 12);
  await prisma.user.upsert({
    where: { email: 'admin@premrest.com.au' },
    update: {},
    create: {
      email: 'admin@premrest.com.au',
      password: adminPassword,
      name: 'Admin',
      role: 'admin',
    },
  });
  console.log('Admin user created: admin@premrest.com.au / admin123');

  // ─── Categories ──────────────────────────────────────────────────────────

  const categoriesData = readJson('categories.json');
  const categoryMap = new Map<string, string>();

  for (const item of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { webflowId: item.id },
      update: { name: item.fieldData.name as string, slug: item.fieldData.slug as string },
      create: {
        webflowId: item.id,
        name: item.fieldData.name as string,
        slug: item.fieldData.slug as string,
      },
    });
    categoryMap.set(item.id, cat.id);
  }
  console.log(`Imported ${categoriesData.length} categories`);

  // ─── Content Types ───────────────────────────────────────────────────────

  const contentsData = readJson('contents.json');
  const contentTypeMap = new Map<string, string>();

  for (const item of contentsData) {
    const ct = await prisma.contentType.upsert({
      where: { webflowId: item.id },
      update: {
        name: item.fieldData.name as string,
        slug: item.fieldData.slug as string,
        sortOrder: (item.fieldData['sort-order'] as number) || 0,
      },
      create: {
        webflowId: item.id,
        name: item.fieldData.name as string,
        slug: item.fieldData.slug as string,
        sortOrder: (item.fieldData['sort-order'] as number) || 0,
      },
    });
    contentTypeMap.set(item.id, ct.id);
  }
  console.log(`Imported ${contentsData.length} content types`);

  // ─── Tags ────────────────────────────────────────────────────────────────

  const tagsData = readJson('tags.json');
  const tagMap = new Map<string, string>();

  for (const item of tagsData) {
    const tag = await prisma.tag.upsert({
      where: { webflowId: item.id },
      update: { name: item.fieldData.name as string, slug: item.fieldData.slug as string },
      create: {
        webflowId: item.id,
        name: item.fieldData.name as string,
        slug: item.fieldData.slug as string,
      },
    });
    tagMap.set(item.id, tag.id);
  }
  console.log(`Imported ${tagsData.length} tags`);

  // ─── Industries ──────────────────────────────────────────────────────────

  const industriesData = readJson('industries.json');

  for (const item of industriesData) {
    await prisma.industry.upsert({
      where: { webflowId: item.id },
      update: { name: item.fieldData.name as string, slug: item.fieldData.slug as string },
      create: {
        webflowId: item.id,
        name: item.fieldData.name as string,
        slug: item.fieldData.slug as string,
      },
    });
  }
  console.log(`Imported ${industriesData.length} industries`);

  // ─── People ──────────────────────────────────────────────────────────────

  const peopleData = readJson('people.json');
  const personMap = new Map<string, string>();

  for (const item of peopleData) {
    const fd = item.fieldData;
    const photo = fd.photo as { url: string } | undefined;

    const person = await prisma.person.upsert({
      where: { webflowId: item.id },
      update: {
        name: fd.name as string,
        title: (fd.title as string) || null,
        slug: fd.slug as string,
        photoUrl: photo?.url || null,
        email: (fd.email as string) || null,
        phone: (fd.phone as string) || null,
        linkedin: (fd.linkedin as string) || null,
        department: (fd.department as string) || null,
        sortOrder: (fd['sort-order'] as number) || 0,
        displayContactInfo: (fd['display-contact-information'] as boolean) || false,
        displayResources: (fd['display-resources'] as boolean) || false,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
      },
      create: {
        webflowId: item.id,
        name: fd.name as string,
        title: (fd.title as string) || null,
        slug: fd.slug as string,
        photoUrl: photo?.url || null,
        email: (fd.email as string) || null,
        phone: (fd.phone as string) || null,
        linkedin: (fd.linkedin as string) || null,
        department: (fd.department as string) || null,
        sortOrder: (fd['sort-order'] as number) || 0,
        displayContactInfo: (fd['display-contact-information'] as boolean) || false,
        displayResources: (fd['display-resources'] as boolean) || false,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
      },
    });
    personMap.set(item.id, person.id);
  }
  console.log(`Imported ${peopleData.length} people`);

  // ─── Projects ────────────────────────────────────────────────────────────

  const projectsData = readJson('projects.json');

  for (const item of projectsData) {
    const fd = item.fieldData;
    const featuredImage = fd['featured-image'] as { url: string } | undefined;
    const photos = fd.photos as { url: string; alt: string | null }[] | undefined;
    const managerIds = fd['project-managers'] as string[] | undefined;

    const project = await prisma.project.upsert({
      where: { webflowId: item.id },
      update: {
        name: fd.name as string,
        slug: fd.slug as string,
        summary: (fd.summary as string) || null,
        description: (fd.description as string) || null,
        featuredImageUrl: featuredImage?.url || null,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
      },
      create: {
        webflowId: item.id,
        name: fd.name as string,
        slug: fd.slug as string,
        summary: (fd.summary as string) || null,
        description: (fd.description as string) || null,
        featuredImageUrl: featuredImage?.url || null,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
      },
    });

    // Delete existing relations before recreating
    await prisma.projectPhoto.deleteMany({ where: { projectId: project.id } });
    await prisma.projectManager.deleteMany({ where: { projectId: project.id } });

    // Photos
    if (photos?.length) {
      for (let i = 0; i < photos.length; i++) {
        await prisma.projectPhoto.create({
          data: {
            projectId: project.id,
            url: photos[i].url,
            alt: photos[i].alt || null,
            sortOrder: i,
          },
        });
      }
    }

    // Managers
    if (managerIds?.length) {
      for (const wfId of managerIds) {
        const personId = personMap.get(wfId);
        if (personId) {
          await prisma.projectManager.create({
            data: { projectId: project.id, personId },
          });
        }
      }
    }
  }
  console.log(`Imported ${projectsData.length} projects`);

  // ─── Resources ───────────────────────────────────────────────────────────

  const resourcesData = readJson('resources.json');

  for (const item of resourcesData) {
    const fd = item.fieldData;
    const featuredImage = fd['featured-image'] as { url: string } | undefined;
    const video = fd.video as { url: string; metadata?: { thumbnail_url?: string } } | undefined;
    const authorWfIds = fd.authorr as string[] | undefined;
    const tagWfIds = fd.tags as string[] | undefined;
    const categoryWfId = fd['category-2'] as string | undefined;
    const typeWfId = fd.type as string | undefined;

    const resource = await prisma.resource.upsert({
      where: { webflowId: item.id },
      update: {
        name: fd.name as string,
        slug: fd.slug as string,
        summary: (fd.summary as string) || null,
        content: (fd.content as string) || null,
        featuredImageUrl: featuredImage?.url || null,
        videoUrl: video?.url || null,
        videoThumbnail: video?.metadata?.thumbnail_url || null,
        categoryId: categoryWfId ? categoryMap.get(categoryWfId) || null : null,
        contentTypeId: typeWfId ? contentTypeMap.get(typeWfId) || null : null,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
        publishedAt: item.isArchived || item.isDraft ? null : new Date(),
      },
      create: {
        webflowId: item.id,
        name: fd.name as string,
        slug: fd.slug as string,
        summary: (fd.summary as string) || null,
        content: (fd.content as string) || null,
        featuredImageUrl: featuredImage?.url || null,
        videoUrl: video?.url || null,
        videoThumbnail: video?.metadata?.thumbnail_url || null,
        categoryId: categoryWfId ? categoryMap.get(categoryWfId) || null : null,
        contentTypeId: typeWfId ? contentTypeMap.get(typeWfId) || null : null,
        isArchived: item.isArchived,
        isDraft: item.isDraft,
        publishedAt: item.isArchived || item.isDraft ? null : new Date(),
      },
    });

    // Delete existing relations before recreating
    await prisma.resourceAuthor.deleteMany({ where: { resourceId: resource.id } });
    await prisma.resourceTag.deleteMany({ where: { resourceId: resource.id } });

    // Authors
    if (authorWfIds?.length) {
      for (const wfId of authorWfIds) {
        const personId = personMap.get(wfId);
        if (personId) {
          await prisma.resourceAuthor.create({
            data: { resourceId: resource.id, personId },
          });
        }
      }
    }

    // Tags
    if (tagWfIds?.length) {
      for (const wfId of tagWfIds) {
        const tagId = tagMap.get(wfId);
        if (tagId) {
          await prisma.resourceTag.create({
            data: { resourceId: resource.id, tagId },
          });
        }
      }
    }
  }
  console.log(`Imported ${resourcesData.length} resources`);

  console.log('\nSeed complete!');
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
