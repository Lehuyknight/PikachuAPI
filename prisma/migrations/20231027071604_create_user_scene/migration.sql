-- CreateTable
CREATE TABLE `User_Scene` (
    `userId` VARCHAR(191) NOT NULL,
    `sceneId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `sceneId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
