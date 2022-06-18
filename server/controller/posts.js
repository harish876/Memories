import PostMessage from "../model/postMessage.js";
export const getPosts=async(req,res)=>{
    try {
        const posts=await PostMessage.find();
        res.status(201).json({posts});
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
export const createPost=async(req,res)=>{
    try {
        //const post=req.body
        //const newPost=new PostMessage(post);
        //await newPost.save();
        
        await PostMessage.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
