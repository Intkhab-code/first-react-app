import React from 'react'
import Card from './Card'
import css from './New.css'

function New() {
  return (
    <>
    <div className='new'>
    <Card SortByPrice="Below Rs 300 -/"/>
    <Card SortByPrice="Below Rs 200 -/"/>
    <Card SortByPrice="Below Rs 400 -/"/>
    <Card SortByPrice="Below Rs 500 -/"/>
    <Card SortByPrice="Below Rs 600 -/"/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default New