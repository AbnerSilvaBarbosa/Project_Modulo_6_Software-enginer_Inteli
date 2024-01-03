import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServiceGetProjects {
  async exec() {
    try {
      const response = await prisma.project.findMany();
      loggerUser.info("Get all projects");
      return response;
    } catch (error) {
      loggerUser.error("Error getting all projects");
      return error;
    }
  }
}

export const serviceGetProjects = new ServiceGetProjects();
