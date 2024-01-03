import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";
class ServiceProjectComplain {
    async exec(data) {
        try {
            const response = await prisma.projectComplaint.create ({
                data: {
                    complaintReason: data.complaintReason,
                    feedback: data.feedback,
                    idProject: data.idProject,
                }
            });
            loggerUser.info(`User ${data.idUser} complained about project ${data.idProject}`);
            return response
            
        } catch (error) {
            loggerUser.error(`Error complaining about project ${data.idProject}`);
            return error;
        }
    }
};

export const serviceProjectComplain = new ServiceProjectComplain();