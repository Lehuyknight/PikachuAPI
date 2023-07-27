/*
  Warnings:

  - A unique constraint covering the columns `[fileName]` on the table `CharacterPackData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `CharacterPackData_fileName_key` ON `CharacterPackData`(`fileName`);
