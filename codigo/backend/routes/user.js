import express from "express";
const router = express.Router();

import { controllerLogin } from "../modules/user/login/controller.js";

import { controllerGetProjects } from "../modules/user/getProjects/controller.js";
import { controllerGetPosts } from "../modules/user/getPosts/controller.js";

// //get by id controllers
import { controllerGetProjectById } from "../modules/user/getProjectById/controller.js";
import { controllerGetPostById } from "../modules/user/getPostById/controller.js";

// //post controllers
import { controllerPostPost } from "../modules/user/postPost/controller.js";
import { controllerCommentPost } from "../modules/user/commentPost/controller.js";
import { controllerPutLike } from "../modules/user/likePut/controller.js";

// //complaint controllers
import { controllerPostComplain } from "../modules/user/postComplain/controller.js";
import { controllerProjectComplain } from "../modules/user/projectComplain/controller.js";

import { controllergetRanking } from "../modules/user/Ranking/controller.js";

/**
 * @swagger
 * /user/login:
 *  post:
 *     description: Create new account
 *     parameters:
 *       - name: email
 *         description: User email
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *
 *
 */

 router.get("/getPostById/:id", controllerGetPostById.exec);

 /**
  * @swagger
  * /user/posts:
  *  post:
  *     description: Create new post
  *     parameters:
  *       - name: article
  *         description: content
  *         in: body
  *         required: true
  *         type: string
  *       - name: time
  *         description: publish time
  *         in: body
  *         required: true
  *         type: DateTime
  *       - name: ups
  *         description: publish ups
  *         in: body
  *         required: true
  *         type: Int
  *       - name: downs
  *         description: publish ups
  *         in: body
  *         required: true
  *         type: Int
  *       - name: image
  *         description: publish image
  *         in: body
  *         required: true
  *         type: string
  *       - name: qntLikes
  *         description: publish likes
  *         in: body
  *         required: true
  *         type: Int
  *     responses:
  *       200:
  *         description: Success
  *
  *
  */
router.post("/login", controllerLogin.exec);

/**
 * @swagger
 * /user/comment-post:
 *  post:
 *      description: Post a comment
 *      parameters:
 *       - name: comment
 *         description: comment
 *         in: body
 *         required: true
 *         type: string
 */
router.post("/comment-post", controllerCommentPost.exec);

/**
 * @swagger
 * /user/posts:
 *   get:
 *     description: Get all posts
 *     responses:
 *       200:
 *         description: Success
 */

router.get("/posts", controllerGetPosts.exec);

/**
 * @swagger
 * /user/project:
 *   get:
 *     description: Get all projects
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/project", controllerProjects.exec);



/**
 * @swagger
 * /user/complain-post:
 *  post:
 *      description: Complain
 *      parameters:
 *       - name: comment
 *         description: comment
 *         in: body
 *         required: true
 *         type: string
 */
router.post("/PostComplain", controllerPostComplain.exec);


export default router;
