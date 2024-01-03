import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServiceGetProjectById {
  async exec(id) {
    try {
      const response = await prisma.project.findUnique({
        where: {
          idProject: id,
        },
      });
      loggerUser.info(`Get project by id ${id}`);
      return response;
    } catch (error) {
      loggerUser.error(`Error getting project by id ${id}`);
      throw new Error("Could not find project");
    }
  }
}

export const serviceGetProjectById = new ServiceGetProjectById();
