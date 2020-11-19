import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items"></div>
      <CustomButton type='button' name='CheckOut' />
    </div>
  )
}

export default CartDropdown
