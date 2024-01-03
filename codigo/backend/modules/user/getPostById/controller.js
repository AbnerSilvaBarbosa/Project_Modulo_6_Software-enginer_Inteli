import { serviceGetPostById } from "./service.js";

class ControllerGetPostById {
    async exec(req, res){
        try {
            let { id } = req.params;
            id = parseInt(id);
    
            const posts = await serviceGetPostById.exec(id);
            res.send(posts);
            
        } catch (error) {
            res.send(error);
        }
    }
}

export const controllerGetPostById  = new ControllerGetPostById();