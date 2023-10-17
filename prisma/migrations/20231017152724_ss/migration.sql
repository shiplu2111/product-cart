/*
  Warnings:

  - You are about to alter the column `updateAt` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `updateAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
