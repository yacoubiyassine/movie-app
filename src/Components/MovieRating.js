import { Rating } from '@mui/material'
import React from 'react'

const MovieRating = ({el}) => {
  return (
    <div>
    <Rating name="read-only" value={el.rating} readOnly />
    </div>
  )
}

export default MovieRating