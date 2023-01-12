import React from 'react'

import MovieList from './MovieCard';

const Destination = ({Data}) => {

  return (
    <div className='aa'>
        {Data.map((el)=>
            <MovieList key={el.id} el={el}/>
            
            )
        }
    </div>
  )
}

export default Destination