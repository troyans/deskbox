/*
  Warnings:

  - Added the required column `uploadId` to the `Links` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Links" ADD COLUMN     "uploadId" TEXT NOT NULL;
