import React from 'react'
import css from './Middle.module.css'
import { useState } from 'react'
function Middle() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className={css.container}>
        <div className={css.end}>
          <div className={css.endleft1}>
            <span className={css.rat1}>EVERY THING BELOW Rs500-/-</span><br />
          </div>
          <div className={css.endleft2}>
            <span className={css.rat2}>Trendy Collection</span><br />
            <span> Buy Trendy Collection Clothing And Accessories at India's Best Online Shopping Store.</span>
          </div>
        </div>
        <div className={css.wraper}>
          <div className={css.blueCircle}>
            {
              toggle ? <div className={css.cart2}>
                <button className={css.hideButton} type='submitt' onClick={() => setToggle(false)}>X</button>
                <form>
                  <input type='number' placeholder='Enter mobile number' />
                  <br />
                  <input type='text' placeholder='Enter full name' />
                  <br />
                  <input placeholder='Enter email address' />
                  <br />
                  <input type='password' placeholder='create a password' />
                  <button>Register here!</button>
                  <p>If you have already account than <a className={css.login} href=''>Sign In</a> here.</p>
                </form>
              </div> : null}
          </div>
          <div className={css.sigup} id='a'>                <span>Best Sigup offers</span>
            <button type='submitt' onClick={() => setToggle(true)}>-</button>
          </div>
        </div>
        <div className={css.end2}>
          <div className={css.endRight1}>
            <span className={css.rating2}>1.5m</span><br />
            <span>Monthly traffic</span>
          </div>
          <div className={css.endRight2}>
            <span className={css.rating2}>100k</span><br />
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
      <div className={css.sig}>
        <span>Best Sigup offers</span>
        <div onClick={() => setToggle(true)}>-</div>
      </div>
      <div>
        <div className={css.endDivMobile}>
          <div><span className={css.endDivMobileRat1}>1.5m</span><br />
            <span>Monthly traffic</span></div>
          <div><span className={css.endDivMobileRat1}>100k</span><br />
            <span>Happy Customers</span></div>
        </div>
      </div>
    </>
  )
}

export default Middle