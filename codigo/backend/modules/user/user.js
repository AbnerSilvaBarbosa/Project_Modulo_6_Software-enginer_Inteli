import express from 'express';


//login controller
import { controllerLogin } from './login/controller.js';

//get controllers
import { controllerGetProjects } from './getProjects/controller.js';
import { controllerGetPosts } from './getPosts/controller.js';

//get by id controllers
import { controllerGetProjectById } from './getProjectById/controller.js';
import { controllerGetPostById } from './getPostById/controller.js';
import { controllerGetUserById } from './getUser/controller.js';

//post controllers
import { controllerPostPost } from './postPost/controller.js';
import  { controllerCommentPost} from './commentPost/controller.js'
import { controllerPutLike } from './likePut/controller.js';

//complaint controllers
import {controllerPostComplain} from './postComplain/controller.js'
import {controllerProjectComplain} from './projectComplain/controller.js'



import {controllergetRanking} from './Ranking/controller.js';


// create a class User with a router / with res send hello world


class User {

    constructor() {
        this.router = express.Router();
    }

    get loadRoutes() {
      //get protocols
      this.router.get("/project", controllerGetProjects.exec);
      this.router.get("/posts", controllerGetPosts.exec);

      //get by id protocols
      this.router.get("/project/:id", controllerGetProjectById.exec);
      this.router.get("/post/:id", controllerGetPostById.exec);
      this.router.get("/:id", controllerGetUserById.exec);
      this.router.get("/ranking/:id", controllergetRanking.exec);

      //login protocol
      this.router.post("/login", controllerLogin.exec);
      
      //post protocol
      this.router.post("/post", controllerPostPost.exec);

      this.router.post("/comment-post", controllerCommentPost.exec);
      
      //complain
      this.router.post("/complain-post", controllerPostComplain.exec);
      this.router.post("/complain-project", controllerProjectComplain.exec);

      //put protocol
      this.router.put("/like", controllerPutLike.exec);

      return this.router;
    }

}

export const user = new User();
