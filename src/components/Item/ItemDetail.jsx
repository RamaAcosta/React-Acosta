import React from 'react'

const ItemDetail = ({ item }) => {
  console.log(item.id)
  return (
    <div className='grid grid-cols-2'>
      <div className='pl-40 flex items-center'>
        <img className='w-80 ' src={item.image} alt='' />
      </div>
      <div className='pr-40'>
        <h1 className='text-3xl font-bold mb-2'>{item.title}</h1>
        <p className='italic opacity-60 mb-6'>{item.category}</p>
        <p>{item.description}</p>
        <p className='text-2xl mt-8 font-bold'>${item.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail
