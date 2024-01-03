import { prisma } from "../database/connection.js";

export async function resetSeason() {
  let users = await prisma.rankUser.findMany({
    orderBy: {
      points: "desc",
    },
  });

  let usersIds = [];

  users.slice(0, 10).map((item, index) => {
    usersIds.push({ idUser: item.idUser, index: index + 1 });
  });

  usersIds.map(async (item) => {
    let coinsAdd = 0;

    switch (item.index) {
      case 1:
        coinsAdd = 100;
        break;
      case 2:
        coinsAdd = 80;
        break;
      case 3:
        coinsAdd = 60;
        break;
      case 4:
        coinsAdd = 40;
        break;
      case 5:
        coinsAdd = 20;
        break;
      case 6:
        coinsAdd = 10;
        break;
      case 7:
        coinsAdd = 5;
        break;
      case 8:
        coinsAdd = 3;
        break;
      case 9:
        coinsAdd = 2;
        break;
      case 10:
        coinsAdd = 1;
        break;
    }

    await prisma.user.updateMany({
      where: {
        idUser: item.idUser,
      },
      data: {
        coins: { increment: coinsAdd },

      },
    });
  });

  await prisma.rankUser.updateMany({
    data: {
      points: 0,
    },
  });

  console.log("it's works, Gabriel you are cute!! 😱")
}
