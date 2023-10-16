import React, { useState } from 'react'
import styles from './Radio.module.scss'

const Radio = ({ register, errors,setoptValue }) => {
  const radioButtons = [1, 2, 3]



  return (
    <>
      {radioButtons.map((select, index) => {
        return (
          <div key={index} className={styles.option}>
            <input
              className={styles.options__input}
              id={'selected ' + `${select}`}
              type='radio'
              name='radio'
              {...register('select', {
                onChange: (e)=>{
                  setoptValue(e.target.id)
                },
                 required: 'select option required' })}
            />
            {errors.select && <p className={styles.error}>{errors.select.message}</p>}

            <label className={styles.options__label} htmlFor={'selected ' + `${select}`}>
              Radio selection {select}
            </label>
          </div>
        )
      })}
    </>
  )
}

export default Radio
