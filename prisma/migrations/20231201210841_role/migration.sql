-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rolse" TEXT[] DEFAULT ARRAY['user']::TEXT[];
