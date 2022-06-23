import * as api from '../api';

//Action creators
//if i want to fetch a post connect this to our api call
//so basically do a api call
//but all api calls are asynchronous
export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
        dispatch({type:"FETCH_ALL",payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPost(post);
        dispatch({type:"CREATE",payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const updatePost=(currentID,post)=>async(dispatch)=>{
    try {
        const {data}=await api.updatePost(currentID,post);
        dispatch({type:"UPDATE",payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const deletePost=(currentID)=>async(dispatch)=>{
    try {
        const {data}=await api.deletePost(currentID);
        dispatch({type:"DELETE",payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
export const likeCount=(currentID)=>async(dispatch)=>{
    try {
        const {data}=await api.likeCount(currentID);
        dispatch({type:"LIKE_COUNT",payload:data});

    } catch (error) {
        console.log(error);
    }
}