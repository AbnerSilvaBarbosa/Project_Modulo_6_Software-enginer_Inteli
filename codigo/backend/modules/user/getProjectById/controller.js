import { serviceGetProjectById } from "./service.js";
class ControllerGetProjectById {
    async exec(req, res){
        try {
            let { id } = req.params;
            id = parseInt(id);
    
            const request = await serviceGetProjectById.exec(id);
            res.send(request);
        } catch (error) {
            res.send(error); 
        }
    }
}

export const controllerGetProjectById  = new ControllerGetProjectById();