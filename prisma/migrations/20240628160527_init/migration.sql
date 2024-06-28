-- AlterEnum
ALTER TYPE "Speaker" ADD VALUE 'ADMIN';

-- AlterTable
ALTER TABLE "Conversations" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
