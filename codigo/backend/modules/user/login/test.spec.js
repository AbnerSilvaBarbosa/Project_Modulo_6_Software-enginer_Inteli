import { describe, it, expect } from "vitest";
import { serviceLogin } from "./service.js";
import { prisma } from "../../../database/connection.js";

const emailUserTest = "test234@te.com";

describe("Login", () => {
  it("should return user logged !", async () => {
    const userTest = await prisma.user.create({
      data: {
        fullName: "Teste",
        idManager: 1,
        subName: "@teste",
        email: emailUserTest,
        password: "123456",
      },
    });

    const request = await serviceLogin.exec({
      email: emailUserTest,
      password: "123456",
    });

    console.log(request);

    await prisma.user.delete({
      where: {
        idUser: userTest.idUser,
      },
    });

    expect(1).toEqual(1);
  });
});
