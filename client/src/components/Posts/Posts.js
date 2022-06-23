import React from 'react';
import {Grid,CircularProgress} from "@material-ui/core";
import Post from './post/Post';
import useStyles from './styles';
//get data from the redux store
import { useSelector } from 'react-redux';
const Posts=({setCurrentID})=>{
    const posts=useSelector((state)=>state.posts);
    const classes=useStyles();
    //console.log(posts);
    return(
            !posts.length?<CircularProgress/>:(
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        posts.map((post)=>(
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post setCurrentID={setCurrentID} post={post}/>
                            </Grid>
                        ))
                    }
                </Grid>
            )
    )
}
export default Posts;