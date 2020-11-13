import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {

  const genLabelClassName = () => {
    const subClass = otherProps.value.length ? 'shrink' : ''
    return `${subClass} form-input-label`
  }

  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        label && (
          <label className={genLabelClassName()}>
            {label}
          </label>
        )
      }
    </div>
  )
}


export default FormInput
