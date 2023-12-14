import React from 'react'

const ItemCard = ({ item }) => {
  return (
    <div className='flex flex-col p-6 shadow-xl rounded-lg hover:shadow-2xl hover:cursor-pointer hover:scale-110 transition-all'>
      <p className='italic opacity-60'>{item.category}</p>
      <img
        className='rounded my-4'
        src={item.image}
        alt=''
      />
      <p className='text-md'>{item.title}</p>
      <p className='font-bold mt-2'>${item.price}</p>
    </div>
  )
}

export default ItemCard
