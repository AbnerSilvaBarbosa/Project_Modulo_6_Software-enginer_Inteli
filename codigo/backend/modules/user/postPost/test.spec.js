import { describe, it, expect } from "vitest";
import { servicePostPost } from "./service.js";
import { prisma } from "../../../database/connection.js";

describe("Post", () => {
  it("should return posts !", async () => {
    const request = await servicePostPost.exec({
      
      time: new Date("2022-03-25"),
      article: "Teste",
      image: "Teste",
      ups: 1,
      downs: 1,
      idUser: 1,
      qntLikes: 1,
    });

    console.log(request);

    expect(request).toEqual({
      idPost: request.idPost,
      time: new Date("2022-03-25"),
      article: "Teste",
      image: "Teste",
      ups: 1,
      downs: 1,
      idUser: 1,
      qntLikes: 1,
    });


    });
  });
