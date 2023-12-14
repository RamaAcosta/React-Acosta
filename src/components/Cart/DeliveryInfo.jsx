import React, { useContext, useState } from 'react'
import CartContext from '../../Context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import CheckoutInfo from './CheckoutInfo'

const DeliveryInfo = () => {
  const [order, setOrder] = useState()
  const { cart, total } = useContext(CartContext)

  const navigate = useNavigate()
  const navigateToCheckoutInfo = id => {
    navigate('/checkoutInfo/:id')
  }

  const [buyer, setBuyer] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: '',
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    cardNumber: '',
    cardExpiration: '',
    cvv: '',
  })

  const newPurchase = async () => {
    const purchase = {
      buyer,
      items: cart,
      date: new Date(),
      total,
    }
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    try {
      const res = await addDoc(orderCollection, purchase)
      await setOrder({
        id: res.id,
        ...purchase,
      })
      console.log(order)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = e => {
    const { target } = e
    setBuyer({
      ...buyer,
      [target.name]: target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errors = {}

    if (buyer.firstName === '') {
      errors.firstName = 'First name is required'
    }
    if (buyer.lastName === '') {
      errors.lastName = 'Last name is required'
    }
    if (buyer.address === '') {
      errors.address = 'Address is required'
    }
    if (buyer.email === '') {
      errors.email = 'Email is required'
    }
    if (buyer.cardNumber === '') {
      errors.cardNumber = 'Card number is required'
    }
    if (buyer.cardExpiration === '') {
      errors.cardExpiration = 'Card expiration is required'
    }
    if (buyer.cvv === '') {
      errors.cvv = 'CVV is required'
    }

    if (Object.keys(errors).length === 0) {
      newPurchase()
    } else {
      setErrors(errors)
    }
  }

  return (
    <>
      <form
        className='rounded border-gray border-[0.5px] shadow-md px-10 py-10 flex flex-col gap-4'
        action=''
      >
        <h2 className='text-3xl font-bold'>Delivery Info</h2>

        <hr />

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div>
              <label
                className=' font-medium text-blue-400'
                htmlFor='name'
              >
                {' '}
                First Name
              </label>
              {errors.firstName && (
                <p className='italic text-xs text-red-500'>{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                className='px-2 py-1 border-[1px] rounded focus:!border-blue-50'
                onChange={handleChange}
                type='text'
                name='firstName'
                placeholder='John Doe'
                value={buyer.firstName}
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className=' font-medium text-blue-400'
                htmlFor='name'
              >
                {' '}
                Last Name
              </label>
              {errors.lastName && <p className='italic text-xs text-red-500'>{errors.lastName}</p>}
            </div>
            <div>
              <input
                className='px-2 py-1 border-[1px] rounded focus:!border-blue-50'
                onChange={handleChange}
                type='text'
                name='lastName'
                placeholder='John Doe'
                value={buyer.lastName}
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <label
              className=' font-medium text-blue-400'
              htmlFor='address'
            >
              {' '}
              Address
            </label>
            {errors.address && <p className='italic text-xs text-red-500'>{errors.address}</p>}
          </div>
          <div>
            <input
              className='px-2 py-1 border-[1px] rounded focus:!border-blue-50 resize-x w-full '
              onChange={handleChange}
              type='text'
              name='address'
              placeholder='123 Main St'
              value={buyer.address}
            />
          </div>
        </div>

        <div>
          <div>
            <label
              className=' font-medium text-blue-400'
              htmlFor='email'
            >
              {' '}
              Email
            </label>
            {errors.email && <p className='italic text-xs text-red-500'>{errors.email}</p>}
          </div>
          <div>
            <input
              className='px-2 py-1 border-[1px] rounded focus:!border-blue-50'
              onChange={handleChange}
              type='email'
              name='email'
              placeholder='rHqgI@example.com'
              value={buyer.email}
            />
          </div>
        </div>

        <hr />

        <h2 className='text-3xl font-bold mt-2'>Payment</h2>

        <hr />

        <div>
          <div>
            <label
              className=' font-medium text-blue-400'
              htmlFor='cardNumber'
            >
              {' '}
              Card Number
            </label>
            {errors.cardNumber && (
              <p className='italic text-xs text-red-500'>{errors.cardNumber}</p>
            )}
          </div>
          <div>
            <input
              className='px-2 py-1 border-[1px] rounded focus:!border-blue-50 resize-x w-full'
              onChange={handleChange}
              type='text'
              name='cardNumber'
              placeholder='1234 1234 1234 1234'
              value={buyer.cardNumber}
            />
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <div>
              <label
                className=' font-medium text-blue-400'
                htmlFor='cardExpiration'
              >
                {' '}
                Card Expiration
              </label>
              {errors.cardExpiration && (
                <p className='italic text-xs text-red-500'>{errors.cardExpiration}</p>
              )}
            </div>
            <div>
              <input
                className='px-2 py-1 border-[1px] rounded focus:!border-blue-50'
                onChange={handleChange}
                type='text'
                name='cardExpiration'
                placeholder='MM/YY'
                value={buyer.cardExpiration}
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className=' font-medium text-blue-400'
                htmlFor='cvv'
              >
                {' '}
                CVV
              </label>
              {errors.cvv && <p className='italic text-xs text-red-500'>{errors.cvv}</p>}
            </div>
            <div>
              <input
                className='px-2 py-1 border-[1px] rounded focus:!border-blue-50'
                onChange={handleChange}
                type='text'
                name='cvv'
                placeholder='123'
                value={buyer.cvv}
              />
            </div>
          </div>
        </div>
        <button
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold mt-4'
          onClick={handleSubmit}
        >
          Pay Now ${total}
        </button>
      </form>
      {order && <CheckoutInfo order={order} />}
    </>
  )
}

export default DeliveryInfo
