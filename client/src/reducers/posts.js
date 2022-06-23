export default (posts=[],action)=>{
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload.posts;
        case "CREATE":
            return [...posts,action.payload];   
        //update redux operation was a bit tough to grasp
        case "UPDATE":
            return posts.map((post)=>post._id===action.payload._id?action.payload:post)
        case "LIKE_COUNT":
            return posts.map((post)=>post._id===action.payload._id?action.payload:post)
        case "DELETE":
            return posts.filter((post)=>post._id!==action.payload._id)    
        default:
            return posts;
    }
}