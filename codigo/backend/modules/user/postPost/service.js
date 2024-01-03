import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";
class ServicePostPost {
    async exec(data) {
        try {
            const response = await prisma.post.create ({
                data: {
                    article: data.article,
                    time: data.time,
                    ups: data.ups,
                    downs: data.downs,
                    idUser: data.idUser,
                    image: data.image,
                    qntLikes: data.qntLikes
                }
            });
            loggerUser.info(`User ${data.idUser} posted`);
            return response;
        } catch (error) {
            loggerUser.error(`Error posting`);
            return error;
        }
    }
};

export const servicePostPost = new ServicePostPost();