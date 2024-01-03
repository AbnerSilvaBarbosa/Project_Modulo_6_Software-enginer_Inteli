import { prisma } from "../../../database/connection.js";
import loggerUser from "../logger.js";

class ServiceGetPosts {
  async exec() {
    try {
      const response = await prisma.post.findMany({
        select: {
          idPost: true,
          article: true,
          time: true,
          qntLikes: true,
          image: true,
          idUser: true,
          UserLikePost: {
            select: {
              idUser: true,
            },
          },
        },
      });

      const jsonResponse = response.map((item) => {
        return {
          idPost: item.idPost,
          article: item.article,
          time: item.time,
          qntLikes: item.qntLikes,
          image: item.image,
          idUser: item.idUser,
          idUserLike: item.UserLikePost.map((item) => item.idUser),
        };
      });
      loggerUser.info("Get all posts");
      return jsonResponse;
    } catch (error) {
      loggerUser.error("Error getting all posts");
      return error;
    }
  }
}

export const serviceGetPosts = new ServiceGetPosts();
