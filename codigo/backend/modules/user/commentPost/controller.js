import { servicePutLike } from "../likePut/service.js";
import { serviceCommentPost } from "./service.js";

class ControllerCommentPost {
    async exec(req, res) {

        const { comment, idUser, idPost } = req.body

        try {
            if (comment) {
                if (idUser) {
                    if (idPost) {
                        const comment = await serviceCommentPost.exec(req.body);
                        await servicePutLike.addPointsByOwnerPost(idPost, 3, idUser)

                        return res.json(comment);
                    }
                    else {
                        return (res.status(400).send("Post not found"))
                    }
                }
                else {
                    return (res.status(400).send("User not found"))
                }
            }
            else {
                return (
                    res.status(400).send("comment not found")
                )
            }

        } catch (error) {
            res.send(error);
        }

    }
}

export const controllerCommentPost = new ControllerCommentPost();