import React from 'react'
import styles from './Input.module.scss'

const Input = ({ errors, register, setuserName ,setuserPassword,setinputText }) => {

  return (
    <>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='name'>
          Username
        </label>
        <input
          className={styles.form__input}
          type='text'
          placeholder='Enter username'
          id='name'
          name='name'
          {...register('name', {
            onChange: (e) => {
              setuserName(e.target.value)
            },
            required: 'name option required',
          })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='password'>
          Password
        </label>
        <input
          className={styles.form__input}
          type='password'
          placeholder='Enter password'
          id='password'
          name='password'
          {...register('password', {
            onChange: (e) => {
              setuserPassword(e.target.value)
            },

            required: 'password option required',
            minLength: {
              value: 4,
              message: 'min length is 4 not less',
            },
            maxLength: {
              value: 12,
              message: 'max length must be 12 not above',
            },
          })}
        />
        {!errors.password && <p>Your password is between 4 and 12 characters</p>}
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>
      <div className={styles.form__item}>
        <label className={styles.form__label} htmlFor='name'>
          Input Text Label
        </label>
        <input
          className={styles.form__input}
          type='text'
          placeholder='Inpyt text'
          id='name'
          {...register('input', {
            onChange: (e) => {
              setinputText(e.target.value)
            },
            required: 'input option required' })}
        />
        {errors.input && <p className={styles.error}>{errors.input.message}</p>}
      </div>
    </>
  )
}

export default Input
