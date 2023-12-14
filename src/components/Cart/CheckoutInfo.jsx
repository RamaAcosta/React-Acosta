import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const CheckoutInfo = ({ order }) => {
  const navigate = useNavigate()
  const { clearCart, shipping } = useContext(CartContext)

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <section className='min-h-screen absolute backdrop-blur-sm w-full inset-0 flex justify-center items-center'>
      <div className='rounded border-gray border-[0.5px] shadow-md px-10 py-10 flex flex-col gap-4 bg-white'>
        <h2 className='text-3xl font-bold'>Checkout Info</h2>
        <p className='opacity-60 italic text-sm mt-[-10px]'>OrderID: {order.id}</p>
        <hr />
        <h3 className='text-xl font-bold'>Personal Info</h3>
        <p> Name: {order.buyer.firstName}</p>
        <p> Last Name: {order.buyer.lastName}</p>
        <p> Email: {order.buyer.email}</p>
        <p> Address: {order.buyer.address}</p>
        <hr />
        <h3 className='text-xl font-bold'>Products</h3>
        {order.items.map(item => (
          <div className='flex items-center'>
            <img
              className='max-h-20'
              src={item.item.image}
              alt=''
            />
            <div className='ml-5'>
              <p className='font-semibold'> {item.item.title}</p>
              <p className='text-end italic  text-blue-700'>${item.item.price * item.quantity}</p>
            </div>
          </div>
        ))}
        <hr />
        <p className='text-center opacity-60 italic text-sm mb-[-10px]'>
          Shipping Cost: ${shipping}
        </p>
        <p className='text-center font-bold text-lg'>Total: ${order.total}</p>

        <hr />
        <button
          onClick={() => {
            navigateToHome(), clearCart()
          }}
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all'
        >
          Close
        </button>
      </div>
    </section>
  )
}

export default CheckoutInfo
