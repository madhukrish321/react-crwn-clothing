import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ name, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {name}
  </button>
)

export default CustomButton
