import React ,{useState, useRef} from 'react'
import {Typography, TextField, Button} from '@material-ui/core'
import {useDispatch } from 'react-redux'
import useStyles from './Styles'

const CommentSection = ({post}) => {
    const classes=useStyles()
    console.log('post')
    const [comments , setComment]=useState([1,2,3,4])
  return (
    <div>
     <div className={classes.commentsOuterContainer}>
         <div className={classes.commentsInnerContainer}>
             <Typography gutterBottom variant="h6">Comments</Typography>
             {comments.map((c, i)=>(
                 <Typography key={i} variant="subtitle1" gutterBottom>Comment {i}</Typography>
             ))}
         </div>
     </div>
    </div>
  )
}

export default  CommentSection

