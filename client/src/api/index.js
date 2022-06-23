import axios from 'axios';
const URL='http://localhost:5000';
const url=`${URL}/posts`;

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);
export const updatePost=(id,newPost)=>axios.patch(`${url}/${id}`,newPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
export const likeCount=(id)=>axios.patch(`${url}/${id}/likePost`);