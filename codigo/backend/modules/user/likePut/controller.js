import { servicePutLike } from "./service.js";

class ControllerPutLike {
    async exec(req, res) {

        try {
            let { idPost, idUser, isLike } = req.body
            idPost = parseInt(idPost)

            if (idPost) {
                if (typeof (isLike) == "boolean") {
                    if (isLike) {
                        const posts = await servicePutLike.increment(idPost, idUser);
                        await servicePutLike.addPointsByOwnerPost(idPost, 2, idUser)
                        return res.send(posts);

                    } else {
                        const posts = await servicePutLike.decrementing(idPost, idUser);
                        await servicePutLike.lessPointsByOwnerPost(idPost, 2)
                        return res.send(posts);
                    }

                }
                else {
                    return (res.status(400).send("Like not found"))
                }
            }
            else {
                return (res.status(400).send("Post not found"))
            }

        } catch (error) {
            res.send(error);
        }

    }
}

export const controllerPutLike = new ControllerPutLike();