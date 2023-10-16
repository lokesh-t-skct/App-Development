import React, { useState } from 'react'
import styles from './Form.module.scss'
import Checkbox from 'components/ui/checkbox/Checkbox'
import Switch from 'components/ui/switch/Switch'
import Radio from 'components/ui/radio/Radio'
import Input from 'components/ui/input/Input'
import Button from 'components/ui/button/Button'
import Dropdown from 'components/ui/dropdawn/Dropdown'
import { useForm } from 'react-hook-form'

const Form = () => {
  const [userName, setuserName] = useState('')
  const [userPassword, setuserPassword] = useState('')
  const [inputText, setinputText] = useState('')
  const [isRemember, setisRemember] = useState(false)
  const [isoff, setisOff] = useState(false)
  const [optvalue, setoptValue] = useState('')
  const [DropdownValue, setDropdown] = useState('dropdawn option')
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      password: '',
      input: '',
    },
    mode: 'onTouched',
  })

  let onSubmit = () => {
    let data = {
      name: userName,
      password: userPassword,
      text: inputText,
      isRemember: isRemember,
      isoff: isoff,
      radio: optvalue,
      dropdawn: DropdownValue,
    }
    alert(JSON.stringify(data))
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action='submit'>
        <Input
          register={register}
          errors={errors}
          setuserName={setuserName}
          setuserPassword={setuserPassword}
          setinputText={setinputText}
        />
        <Checkbox setisRemember={setisRemember} />
        <Switch setisOff={setisOff} />
        <Radio register={register} errors={errors} styles={styles} setoptValue={setoptValue} />
        <Dropdown setDropdown={setDropdown} />
        <div className={styles.buttonsWrap}>
          <Button name='Cancel' />
          <Button name='Next' isValid={isValid} />
        </div>
      </form>
    </div>
  )
}

export default Form
