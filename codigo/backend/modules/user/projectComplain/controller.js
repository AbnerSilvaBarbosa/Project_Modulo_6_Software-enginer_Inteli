import { serviceProjectComplain } from "./service.js";

class ControllerProjectComplain {
    async exec(req, res) {
        try {
            //console.log(req.body);
            const post = await serviceProjectComplain.exec(req.body);
            res.json(post);
            
        } catch (error) {
            res.error;
        }
    }
}

export const controllerProjectComplain = new ControllerProjectComplain();