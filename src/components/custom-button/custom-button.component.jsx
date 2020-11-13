import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ name, type }) => (
  <button className='custom-button' type={type}>
    {name}
  </button>
)

export default CustomButton
