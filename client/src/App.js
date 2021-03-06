import React from 'react';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';

const App=()=>{
  const [currentID,setCurrentID]=useState(null);
  const classes=useStyles();
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getPosts());
  },[currentID,dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading}variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
