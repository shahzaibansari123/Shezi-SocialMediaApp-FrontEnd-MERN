import React from "react";
import Post from "./Post/Post";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({setCurrentId}) => {
  const {posts, isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();
  // console.log(posts);

if(!posts.length && !isLoading) return 'No Posts'


  return isLoading ? (
    <center>
    <CircularProgress color="inherit"/>
    </center>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid item key={post._id} xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );

  // <>
  //   <h1>posts</h1>
  //   <Post />
  //   <Post />
  // </>
};

export default Posts;
