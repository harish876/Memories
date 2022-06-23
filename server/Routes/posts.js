import express from "express";
import { getPosts, createPost , updatePost, deletePost, likeCount } from '../controller/posts.js';
const router=express.Router();

router.route('/').get(getPosts);
router.route('/').post(createPost);
router.route('/:id').patch(updatePost);
router.route('/:id').delete(deletePost);
router.route('/:id/likePost').patch(likeCount);

export default router;