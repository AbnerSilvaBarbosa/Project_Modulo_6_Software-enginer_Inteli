import { prisma } from "../database/connection.js";

await prisma.comment.deleteMany({});
await prisma.postsTags.deleteMany({});
await prisma.post.deleteMany({});
await prisma.rankUser.deleteMany({});
await prisma.user.deleteMany({});
await prisma.commentComplaint.deleteMany({});
await prisma.postComplaint.deleteMany({});
await prisma.project.deleteMany({});
await prisma.projectComplaint.deleteMany({});
await prisma.projectTags.deleteMany({});
await prisma.techs.deleteMany({});
await prisma.userApplyProject.deleteMany({});
await prisma.userLikePost.deleteMany({});
await prisma.userTags.deleteMany({});

