import mongoose from "mongoose";
import PostMessage from "../model/postMessage.js";
export const getPosts=async(req,res)=>{
    try {
        const posts=await PostMessage.find({});
        res.status(201).json({posts});
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
export const createPost=async(req,res)=>{
    try {
        const post=req.body
        const newPost=new PostMessage(post);
        await newPost.save();
        //await PostMessage.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
export const updatePost=async(req,res)=>{
    try {
        const postID=req.params.id;
        const post=req.body;
        if(!mongoose.Types.ObjectId.isValid(postID)) return res.status(404).json({msg:"Not Found"});
        const updatedPost=await PostMessage.findByIdAndUpdate(postID,{...post,_id:postID},{new:true});
        res.status(201).json(updatedPost);

    } catch (error) { 
        res.status(500).json({msg:error});
    }
}
export const deletePost=async(req,res)=>{
    try {
        const postID=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(postID)) return res.status(404).json({msg:"Not Found"});
        const deletedPost=await PostMessage.findByIdAndDelete({_id:postID});
        res.status(201).json(deletedPost);

    } catch (error) { 
        res.status(500).json({msg:error});
    }
}

export const likeCount=async(req,res)=>{
    try {
        const postID=req.params.id;
        if(!mongoose.Types.ObjectId.isValid(postID)) return res.status(404).json({msg:"Not Found"});
        //const post=await PostMessage.findById(postID);
        //const countUpdate=await PostMessage.findByIdAndUpdate(postID,{likeCount:post.likeCount+1},{new:true});
        const countUpdate=await PostMessage.findOneAndUpdate({_id:postID},{$inc:{likeCount:1}},{new:true});
        res.status(201).json(countUpdate);
        console.log('like count executed');

    } catch (error) { 
        res.status(500).json({msg:error});
    }
}