import React from 'react'
import styles from './Switch.module.scss'
const Switch = ({setisOff}) => {
  return (
    // setisOff(prev => !prev)
    <div>
      <div className={styles.checkbox}>
        <input className={styles.checkbox__input} onChange={(e)=>setisOff(prev => !prev)}  type='checkbox' name='off' id='off' />
        <label className={styles.checkbox__label} htmlFor='off'>
          Off
        </label>
      </div>
    </div>
  )
}

export default Switch
