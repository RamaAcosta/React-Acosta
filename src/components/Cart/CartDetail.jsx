import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { HiOutlineTrash } from 'react-icons/hi'
import CartContext from '../../Context/CartContext'
import { RxCross2 } from 'react-icons/rx'
import DeliveryInfo from './DeliveryInfo'

const CartDetail = () => {
  const { cart, clearCart, subTotal, total, removeItem, shipping } = useContext(CartContext)

  return (
    <section className='grid grid-cols-1 gap-4 lg:grid-cols-2 min-h-screen place-items-center px-12 pt-32 pb-32'>
      <div className='rounded border-gray border-[0.5px] shadow-md px-10 py-10 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <h2 className='text-3xl font-bold'>Shopping Cart</h2>
          <HiOutlineTrash
            className='hover:cursor-pointer'
            onClick={clearCart}
          />
        </div>
        <hr />
        {cart.map(item => (
          <div className='grid grid-cols-5 lg:grid-cols-6 min-h-[110px]'>
            <div className='flex items-center '>
              <img
                className='max-h-20'
                src={item.item.image}
                alt=''
              />
            </div>
            <div className='flex flex-col h-full col-span-2 lg:col-span-3 ml-5'>
              <p className='font-semibold text-lg mb-2'>{item.item.title}</p>
              <p className='italic opacity-60 text-sm'>{item.item.category}</p>
            </div>
            <div className='flex justify-between flex-col h-full items-end'>
              <p className='font-semibold text-lg'>${item.item.price * item.quantity}</p>
              <div className='flex items-center '>
                <p className='text-sm text-blue-400'>{item.item.rating} </p>
                <FaStar className='w-4 ml-2' />
              </div>
              <p className='text-sm'>
                Quantity: <span className='text-blue-400'>{item.quantity}</span>
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <RxCross2
                onClick={() => removeItem(item.item.id)}
                className='hover:cursor-pointer'
              />
            </div>
          </div>
        ))}

        <hr />

        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p className='font-semibold'>${subTotal}</p>
        </div>
        <div className='flex justify-between'>
          <p>Shipping</p>
          <p className='font-semibold'>${shipping}</p>
        </div>

        <hr />

        <div className='flex justify-between'>
          <p className='font-bold text-blue-400 text-lg'>Total</p>
          <p className='font-semibold text-lg'>${total}</p>
        </div>
      </div>

      <div>
        <DeliveryInfo />
      </div>
    </section>
  )
}

export default CartDetail
