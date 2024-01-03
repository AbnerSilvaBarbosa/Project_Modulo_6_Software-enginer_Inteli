import { servicegetRanking } from "./service.js";


class ControllergetRanking {
    async exec(req, res) {

        const { id } = req.params

        const userExist = await servicegetRanking.verifyUserById(Number(id))

        if (!userExist) {
            return res.status(400).send("Doesn't exist")
        }


        try {
            const rankUsers = await servicegetRanking.exec(id);
            return res.status(200).send(rankUsers);

        } catch (error) {
            return res.status(400).send(error)
        }

    }

}

export const controllergetRanking = new ControllergetRanking();
