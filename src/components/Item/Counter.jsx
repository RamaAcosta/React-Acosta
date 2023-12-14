import React, { useState } from 'react'
import { toast } from 'sonner'

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className='flex gap-4 items-center'>
      <span className='text-2xl font-semibold border border-blue-600 rounded px-2 py-1'>
        {count}
      </span>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all'
        onClick={increment}
      >
        +
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all'
        onClick={decrement}
      >
        -
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all'
        onClick={() => {
          onAdd(count), toast(`${count} item/s added to your cart`)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Counter
