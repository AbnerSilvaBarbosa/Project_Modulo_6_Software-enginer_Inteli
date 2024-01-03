-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "subName" TEXT NOT NULL,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "isManager" BOOLEAN NOT NULL DEFAULT false,
    "idManager" INTEGER NOT NULL
);
INSERT INTO "new_User" ("email", "fullName", "idManager", "idUser", "isManager", "password", "subName") SELECT "email", "fullName", "idManager", "idUser", "isManager", "password", "subName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
