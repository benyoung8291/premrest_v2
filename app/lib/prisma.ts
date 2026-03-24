import { PrismaClient } from '../../generated/prisma';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client';

function createPrisma() {
  const libsql = createClient({ url: 'file:prisma/dev.db' });
  const adapter = new PrismaLibSql(libsql);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
