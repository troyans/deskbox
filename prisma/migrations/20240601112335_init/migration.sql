-- DropForeignKey
ALTER TABLE "Documents" DROP CONSTRAINT "Documents_projectId_fkey";

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
