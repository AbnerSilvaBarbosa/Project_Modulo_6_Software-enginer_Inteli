import { servicePostComplain } from "./service.js";

class ControllerPostComplain {
    async exec(req, res) {
        try {
            //console.log(req.body);
            const post = await servicePostComplain.exec(req.body);
            res.json(post);
            
        } catch (error) {
            res.send(error)
        }
    }
}

export const controllerPostComplain = new ControllerPostComplain();