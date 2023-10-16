import React from 'react'
import styles from './Button.module.scss'

const Button = ({ name, isValid }) => {
  return (
    <>
      <button disabled={!isValid} className={`${styles.button} ${name !== 'Next' ? styles.button__cancel : ''}`}>
        <span>{name}</span>
      </button>
    </>
  )
}

export default Button
