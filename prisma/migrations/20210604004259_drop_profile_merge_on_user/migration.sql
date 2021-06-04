/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fullname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" VARCHAR(200),
ADD COLUMN     "fullname" VARCHAR(150) NOT NULL,
ADD COLUMN     "fullnameIsPublic" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Profile";