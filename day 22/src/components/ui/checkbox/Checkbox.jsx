import React from 'react'
import styles from './Checkbox.module.scss'
const Checkbox = ({ setisRemember }) => {
  return (
    <div>
      <div className={styles.form__item}>
        <div className={styles.checkbox}>
          <input
            className={styles.checkbox__input}
            onChange={(e) => setisRemember((prev) => !prev)}
            type='checkbox'
            name='remember'
            id='remember'
          />
          <label className={styles.checkbox__label} htmlFor='remember'>
            Remember me
          </label>
        </div>
      </div>
    </div>
  )
}

export default Checkbox
