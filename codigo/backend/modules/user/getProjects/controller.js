//request controller
import { serviceGetProjects } from "./service.js";

class ControllerGetProjects {
  async exec(req, res) {
    try {
      const projects = await serviceGetProjects.exec();
      res.send(projects);
      
    } catch (error) {
      res.send(error);
    }
  }
}

export const controllerGetProjects = new ControllerGetProjects();
