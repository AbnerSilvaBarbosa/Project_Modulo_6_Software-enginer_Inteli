-- CreateTable
CREATE TABLE "User" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "subName" TEXT NOT NULL,
    "isManager" BOOLEAN NOT NULL DEFAULT false,
    "idManager" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "idProject" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dataStart" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "statusApply" BOOLEAN NOT NULL,
    "newOrGoing" BOOLEAN NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idManager" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "idPost" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "article" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "ups" INTEGER NOT NULL,
    "downs" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "qntLikes" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Comment" (
    "idComment" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idPost" INTEGER NOT NULL,
    "idUser" INTEGER NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Techs" (
    "idTag" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "techName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectComplaint" (
    "idProjectComplaint" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "complaintReason" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "idProject" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "PostComplaint" (
    "idPostComplaint" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "complaintReason" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "idPost" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "CommentComplaint" (
    "idCommentComplaint" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "complaintReason" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "idComment" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProjectTag" (
    "idProject" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idProject", "idTag"),
    CONSTRAINT "ProjectTag_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "Project" ("idProject") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProjectTag_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "Techs" ("idTag") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserTags" (
    "idUser" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,

    PRIMARY KEY ("idUser", "idTag"),
    CONSTRAINT "UserTags_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserTags_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "Techs" ("idTag") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PostsTags" (
    "idPost" INTEGER NOT NULL,
    "idTag" INTEGER NOT NULL,

    PRIMARY KEY ("idPost", "idTag"),
    CONSTRAINT "PostsTags_idPost_fkey" FOREIGN KEY ("idPost") REFERENCES "Post" ("idPost") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostsTags_idTag_fkey" FOREIGN KEY ("idTag") REFERENCES "Techs" ("idTag") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserApplyProject" (
    "idUser" INTEGER NOT NULL,
    "idProject" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    PRIMARY KEY ("idUser", "idProject"),
    CONSTRAINT "UserApplyProject_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserApplyProject_idProject_fkey" FOREIGN KEY ("idProject") REFERENCES "Project" ("idProject") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RankUser" (
    "idUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "points" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    CONSTRAINT "RankUser_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
