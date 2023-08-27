import React from 'react'
import css from './Card.css'

function Card({SortByPrice}) {
  return (
    <>
      <div className='card'>
          <h3>{SortByPrice}</h3>
      </div>
    </>
  )
}

export default Card