import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServiceLogin {
  async exec(data) {
    try {
      const response = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (response) {
        if (response.password === data.password) {
          loggerUser.info(`User ${data.email} logged in`);
          return response;
        } else {
          loggerUser.error(`User could not be authenticated`);
          throw new Error("Could not authenticate user");
        }
      } else {
        loggerUser.error(`User ${data.email} not found`);
        throw new Error("User not found");
      }

      
    } catch (error) {
      loggerUser.error(`Error logging in user ${data.email}`);
      throw new Error(error.message);
    }
  }
}

export const serviceLogin = new ServiceLogin();
