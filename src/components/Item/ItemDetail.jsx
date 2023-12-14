import React, { useContext } from 'react'
import Counter from './Counter'

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto items-center px-20 gap-20 pt-32 pb-32'>
      <div className=' flex items-center justify-center'>
        <img
          className='w-80 '
          src={item.image}
          alt=''
        />
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-2'>{item.title}</h1>
        <p className='italic opacity-60 mb-6'>{item.category}</p>
        <p>{item.description}</p>
        <div className='flex items-center  mt-8 '>
          <p className='text-2xl mr-4 font-bold'>${item.price}</p>
          <Counter onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
