import { describe, it, expect } from "vitest";
import { serviceGetPosts } from "./service.js";

describe("GetPosts", () => {
  it("should get all posts", async () => {
    const posts = await serviceGetPosts.exec();
    expect(posts).toEqual(posts);
  });
});
