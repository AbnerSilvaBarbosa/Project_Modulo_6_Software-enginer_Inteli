/*
  Warnings:

  - You are about to drop the column `position` on the `RankUser` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "UserLikePost" (
    "idUser" INTEGER NOT NULL,
    "idPost" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idPost"),
    CONSTRAINT "UserLikePost_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserLikePost_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "Post" ("idPost") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RankUser" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "points" INTEGER NOT NULL,
    CONSTRAINT "RankUser_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RankUser" ("idUser", "points") SELECT "idUser", "points" FROM "RankUser";
DROP TABLE "RankUser";
ALTER TABLE "new_RankUser" RENAME TO "RankUser";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
