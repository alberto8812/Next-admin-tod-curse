/*
  Warnings:

  - You are about to drop the column `rolse` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "rolse",
ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY['user']::TEXT[];
