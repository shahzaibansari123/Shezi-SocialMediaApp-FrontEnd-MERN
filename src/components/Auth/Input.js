import React from 'react'
import {TextField, Grid, InputAdornment , IconButton} from '@material-ui/core'

const Input = ({half}) => {
  return (
    <Grid item sx={12} sm={half ? 6 : 12}></Grid>
  )
}

export default Input
