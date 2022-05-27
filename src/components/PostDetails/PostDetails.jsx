import React, {useEffect} from 'react'
import {Paper, Divider, CircularProgress, Typography} from '@material-ui/core'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {useParams, useHistory} from 'react-router-dom'
import  useStyles from './Styles'

const PostDetails = () => {
    console.log('Post Details')
  return (
    <div style={{color: 'white'}}>PostDetails</div>
  )
}

export default PostDetails