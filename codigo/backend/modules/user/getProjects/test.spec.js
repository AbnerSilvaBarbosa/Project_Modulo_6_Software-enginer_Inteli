import { describe, it, expect } from "vitest";
import { serviceGetProjects } from "./service.js";

describe("Post", () => {
  it("should return all posts !", async () => {
    const projects = await serviceGetProjects.exec();
    expect(projects).toEqual(projects);
  });
});
