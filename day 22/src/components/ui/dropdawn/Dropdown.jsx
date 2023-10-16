import React from 'react'
import Select from 'react-select'

const Dropdown = ({ setDropdown }) => {
  const HandleSelect = (selectedOption) => {
    setDropdown(selectedOption)
  }
  const options = [
    { value: 1, label: 'Dropdown option' },
    { value: 2, label: 'Dropdown option 1' },
    { value: 3, label: 'Dropdown option 2' },
  ]
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#fff' : '#666666',
      backgroundColor: state.isSelected ? '#7A5CFA' : '#fff',
    }),

    control: (defaultStyles, state) => ({
      ...defaultStyles,
      backgroundColor: '#fff',
      padding: ' 0px 10px',
      fontSize: '16px',
      border: '1px solid #CCC',
      height: '56px',
      border: state.isFocused ? '1px solid #7A5CFA' : '1px solid #cccccc',
      boxShadow: 'none',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#000' }),
    dropdownIndicator: (defaultStyles, state) => ({
      ...defaultStyles,
      color: '#7A5CFA',
      transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
  }
  return (
    <div>
      <Select
        className='react-select-container'
        classNamePrefix='react-select'
        defaultValue={options[0]}
        options={options}
        styles={customStyles}
        required
        placeholder={<div className='select-placeholder-text'>Select category</div>}
        name='Subscription'
        onChange={HandleSelect}
        components={{ IndicatorSeparator: () => null }}
      />
    </div>
  )
}

export default Dropdown
