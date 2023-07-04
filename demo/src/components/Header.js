import React from 'react'
import css from './Header.module.css'
import image from '../asesst/images.jpg'
import img from '../asesst/search.png'
import { useState } from 'react'
import { Link } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>
          <img src={image} />
          <span>amazon</span>
        </div>
        <div className={css.right}>
          <div className={css.menu}>
            <div className={css.navbar}>
              <span onClick={() => setToggle(!toggle)}>=</span>
            </div>
            {toggle && (<ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li><Link to="/collection">Collection</Link></li>
              <li><Link to="/new">New</Link></li>
              <li><Link to="/sale">Sale</Link></li>
            </ul>)}
          </div>
          <div className={css.searchBar}>
            <input type="text" className={css.search} />
            <img type="submitt" src={img} className={css.searchImage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header