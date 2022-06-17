import express from "express";
import { getPosts, createPost } from '../controller/posts.js';
const router=express.Router();

router.route('/').get(getPosts);
router.route('/').post(createPost);

export default router;