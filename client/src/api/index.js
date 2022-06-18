import axios from 'axios';
const URL='http://localhost:5000';
const url=`${URL}/posts`;

export const fetchPosts=()=>axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost);