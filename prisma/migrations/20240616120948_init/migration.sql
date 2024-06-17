/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Projects` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "code" VARCHAR(255);

-- CreateTable
CREATE TABLE "Conversations" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Projects_code_key" ON "Projects"("code");

-- AddForeignKey
ALTER TABLE "Conversations" ADD CONSTRAINT "Conversations_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
