import React from "react";
import Post from "./Post/Post";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  // console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
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
