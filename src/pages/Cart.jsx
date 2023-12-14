import React, { useContext } from 'react'
import CartDetail from '../components/Cart/CartDetail'
import CartContext from '../Context/CartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {cart.length > 0 ? <CartDetail /> : <p className='text-3xl font-black'>Your cart is empty</p>}
    </div>
  )
}

export default Cart
