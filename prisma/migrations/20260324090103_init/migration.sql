-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "slug" TEXT NOT NULL,
    "photoUrl" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "linkedin" TEXT,
    "department" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "displayContactInfo" BOOLEAN NOT NULL DEFAULT false,
    "displayResources" BOOLEAN NOT NULL DEFAULT false,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isDraft" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ContentType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Industry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "content" TEXT,
    "featuredImageUrl" TEXT,
    "videoUrl" TEXT,
    "videoThumbnail" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isDraft" BOOLEAN NOT NULL DEFAULT false,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "categoryId" TEXT,
    "contentTypeId" TEXT,
    CONSTRAINT "Resource_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Resource_contentTypeId_fkey" FOREIGN KEY ("contentTypeId") REFERENCES "ContentType" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResourceAuthor" (
    "resourceId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,

    PRIMARY KEY ("resourceId", "personId"),
    CONSTRAINT "ResourceAuthor_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ResourceAuthor_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResourceTag" (
    "resourceId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    PRIMARY KEY ("resourceId", "tagId"),
    CONSTRAINT "ResourceTag_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ResourceTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "webflowId" TEXT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "summary" TEXT,
    "description" TEXT,
    "featuredImageUrl" TEXT,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "isDraft" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectPhoto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ProjectPhoto_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectManager" (
    "projectId" TEXT NOT NULL,
    "personId" TEXT NOT NULL,

    PRIMARY KEY ("projectId", "personId"),
    CONSTRAINT "ProjectManager_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectManager_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Person_webflowId_key" ON "Person"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_slug_key" ON "Person"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_webflowId_key" ON "Category"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ContentType_webflowId_key" ON "ContentType"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentType_slug_key" ON "ContentType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_webflowId_key" ON "Tag"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_slug_key" ON "Tag"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_webflowId_key" ON "Industry"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_slug_key" ON "Industry"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_webflowId_key" ON "Resource"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Resource_slug_key" ON "Resource"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Project_webflowId_key" ON "Project"("webflowId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
