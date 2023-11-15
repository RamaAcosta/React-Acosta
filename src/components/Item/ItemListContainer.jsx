import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Barloader from 'react-spinners/BarLoader'

import ItemCard from './ItemCard'

const ItemListContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()
  console.log(params.category)

  useEffect(() => {
    fetchData()
  }, [params.category])

  const fetchData = async () => {
    try {
      setLoading(true)
      if (params.category === undefined) {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const result = await response.json()
        console.log(result)
        setData(result)
      } else {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${params.category}`
        )
        const result = await response.json()
        await console.log(result)
        setData(result)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='grid grid-cols-4 w-3/4 m-auto items-center gap-4 pt-12 min-h-screen'>
      {loading ? (
        <Barloader className='absolute m-[400px]' />
      ) : data.length === 0 ? (
        <p>No items found.</p>
      ) : (
        data.map((item) => (
          <li key={item.id} className='list-none'>
            <NavLink to={`/item/${item.id}`}>
              <ItemCard item={item} />
            </NavLink>
          </li>
        ))
      )}
    </section>
  )
}

export default ItemListContainer
