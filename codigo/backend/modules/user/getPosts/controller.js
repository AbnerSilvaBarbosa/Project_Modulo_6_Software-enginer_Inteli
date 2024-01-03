import { serviceGetPosts } from "./service.js";

class ControllerGetPosts {
  async exec(req, res) {
    try {
      const request = await serviceGetPosts.exec();
      res.send(request);
      
    } catch (error) {
      res.send(error);
    }
  }
}

export const controllerGetPosts = new ControllerGetPosts();
