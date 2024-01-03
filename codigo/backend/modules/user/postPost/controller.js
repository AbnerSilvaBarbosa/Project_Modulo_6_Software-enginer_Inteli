import { servicePostPost } from "./service.js";

class ControllerPostPost {
    async exec(req, res) {
        try {
            const post = await servicePostPost.exec(req.body);
            res.json(post);
        } catch (error) {
            res.status(400).send({ error: error.message })
        }

    }
}

export const controllerPostPost = new ControllerPostPost();