/*
  Warnings:

  - You are about to drop the column `body` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `message` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Speaker" AS ENUM ('USER', 'AI');

-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "body",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" TEXT NOT NULL,
ADD COLUMN     "speaker" "Speaker" NOT NULL DEFAULT 'USER';
