import React from 'react'
import useStyles from './Styles'
import {Card, CardContent, CardActions, CardMedia, Button, Typography}from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

const Post = ({post}) => {
    const classes=useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div classname={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color : 'white'}} size="small" onClick={()=>{}}><MoreHorizIcon fontSize="default"/></Button>
      </div>
      
    </Card>
    // <div>
    //   <h1>post</h1>
    // </div>
  )
}

export default Post
