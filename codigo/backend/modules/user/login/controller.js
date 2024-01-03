import { serviceLogin } from "./service.js";

class ControllerLogin {
  async exec(req, res) {
    try {
      const user = await serviceLogin.exec(req.body);
      res.send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export const controllerLogin = new ControllerLogin();
