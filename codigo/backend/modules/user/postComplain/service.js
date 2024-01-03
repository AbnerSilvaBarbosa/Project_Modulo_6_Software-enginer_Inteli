import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServicePostComplain {
    async exec(data) { 
        try {
            const response = await prisma.postComplaint.create ({
                data: {
                    complaintReason: data.complaintReason,
                    feedback: data.feedback,
                    idPost: data.idPost,
                }
            });
            loggerUser.info(`User ${data.idUser} complained about post ${data.idPost}`);
            return response;
            
        } catch (error) {
            loggerUser.error(`Error complaining about post ${data.idPost}`);
            return error;
        }
    }
};

export const servicePostComplain = new ServicePostComplain();