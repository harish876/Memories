import * as api from '../api';

//Action creators
//if i want to fetch a post connect this to our api call
//so basically do a api call
//but all api calls are asynchronous
export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error);
    }
}