import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../Context/CartContext'
const CartWidget = () => {
  const { totalItems } = useContext(CartContext)
  return (
    <div className='flex items-center fixed right-0 px-12 h-12 z-40'>
      <FaShoppingCart />
      <small className='ml-2'>{totalItems}</small>
    </div>
  )
}

export default CartWidget
