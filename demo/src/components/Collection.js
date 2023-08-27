import React from 'react'
import css from './Collection.module.css'
import {useEffect , useState} from 'react'
function Collection() {
  const [post, setPosts] = useState('')
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => setPosts(json))
}, [])

function deleteUser(id){
  fetch(`https://fakestoreapi.com/products/6${id}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.log(resp);
    })
  })
}
  return (
    <div className={css.a}>
       {post && post.length > 0? post.map((e,i)=>{
       return <div className={css.c}>
        <p>Price-{e.id}</p>
        <p>Price-{e.title}</p>
        <img src={e.image} alt="product img" className={css.b}/>
        <p>Price-{e.price}</p>
        <button onClick={()=>deleteUser(e.id)}>Delete</button>
        </div>
     }): ''}
    </div>
  )
}

export default Collection