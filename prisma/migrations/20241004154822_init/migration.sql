-- CreateTable
CREATE TABLE "Onboardings" (
    "id" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "other" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Onboardings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Onboardings" ADD CONSTRAINT "Onboardings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
