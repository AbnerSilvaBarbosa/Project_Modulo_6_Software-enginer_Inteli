import { ServiceputUpDown } from "./service.js";


class ControllergetRanking {
    async exec(req, res){
        try {
            const {id} = req.body
    
            const rankUsers = await ServiceputUpDown.exec(id);
            res.send(rankUsers);
            
        } catch (error) {
            res.error;
        }

    }
    
}

export const controllergetRanking = new ControllergetRanking();
