import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from "./Styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  console.log("post");
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");

  const handleClick=()=>{

  }


  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} variant="subtitle1" gutterBottom>
              Comment {i}
            </Typography>
          ))}
         </div>
        <div style={{ width: "70%" }}>
          <Typography variant="h6" gutterBottom>
            Write a Comment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button style={{marginTop: "10px"}} fullWidth disabled={!comment} onClick={handleClick} color="primary" variant="contained">Comment</Button>
        </div>
       
      </div>
    </div>
  );
};

export default CommentSection;
