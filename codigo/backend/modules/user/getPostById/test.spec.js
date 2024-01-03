import { describe, it, expect } from "vitest";
import { serviceGetPostById } from "./service.js";
import { prisma } from "../../../database/connection.js";

describe("Get post by id", () => {
  it("should return post by it's id !", async () => {
    const post = await serviceGetPostById.exec(1);
    expect(post.idPost).toEqual(post.idPost);
  });
});
