import React, { useState } from 'react'
import CartContext from './CartContext'
import { QueryConstraint } from 'firebase/firestore'

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  console.log(cart)

  const addToCart = (item, q) => {
    if (isInCart(item.id)) {
      console.log('aki')
      const newCart = cart.map(el => {
        if (el.item.id === item.id) {
          el.quantity += q
          return el
        }
        return el
      })
      setCart(newCart)
    } else {
      console.log('aka')
      setCart([...cart, { item, quantity: q }])
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.item.price
  }, 0)

  const shipping = Math.round(Math.random() * 100) / 10

  const total = Math.round(subTotal + shipping)

  const totalItems = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const removeItem = id => {
    const newCart = cart.filter(el => el.item.id !== id)
    setCart(newCart)
  }

  const isInCart = id => {
    return cart.find(el => el.item.id === id)
  }

  const values = {
    cart,
    addToCart,
    clearCart,
    removeItem,
    totalItems,
    shipping,
    subTotal,
    total,
  }

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export default CartContextProvider
