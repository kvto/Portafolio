import { Box } from '@material-ui/core'
import React from 'react'
import {Rating} from '@material-ui/lab'

export const StarRating = ({stars}) => {
  return (
    <div>
        <Box component="fieldset" borderColor="transparent">
          <Rating name="read-only" readOnly value={stars} color={""}/>  
        </Box>
    </div>
  )
}

export default StarRating