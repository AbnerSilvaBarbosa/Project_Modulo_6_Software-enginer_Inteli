import { serviceGetUserById } from "./service.js";

class ControllerGetUserById {
  async exec(req, res) {

    const { id } = req.params

    try {
      const user = await serviceGetUserById.exec(id);
      res.send(user);
      
    } catch (error) {
      res.send(error);
    }
  }
}

export const controllerGetUserById = new ControllerGetUserById();
