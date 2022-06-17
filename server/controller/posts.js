import PostMessage from "../model/postMessage.js";
export const getPosts=(req,res)=>{
    res.send("This shit hard");
};
export const createPost=async(req,res)=>{
    try {
        await PostMessage.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        res.status(500).json({msg:error});
    }
};
