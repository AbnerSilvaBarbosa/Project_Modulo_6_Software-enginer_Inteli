import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServiceGetPostById {
  async exec(id) {
    try {
      const response = await prisma.post.findUnique({
        where: {
          idPost: id,
        },
      });

      loggerUser.info(`Get post by id ${id}`);
      return response;
    } catch (error) {
      loggerUser.error(`Error getting post by id ${id}`);
      throw new Error("Could not find post");
    }
  }
}

export const serviceGetPostById = new ServiceGetPostById();
