import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Barloader from 'react-spinners/BarLoader'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState()
  console.log(id)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const result = await response.json()
      console.log(result)
      setItem(result)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  console.log(item)
  return (
    <section className='flex justify-center items-center min-h-screen'>
      {loading ? (
        <Barloader className='' />
      ) : (
        <div className='min-h-screen flex  items-center'>{item && <ItemDetail item={item} />}</div>
      )}
    </section>
  )
}

export default ItemDetailContainer
