import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Barloader from 'react-spinners/BarLoader'

import ItemCard from './ItemCard'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { category } = useParams()
  const [filteredItems, setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore()
        const itemCollection = collection(db, 'items')
        const snapshot = await getDocs(itemCollection)
        const allData = snapshot.docs.map(document => ({ id: document.id, ...document.data() }))
        setItems(allData)
        setLoading(false)
      } catch {
        console.log('error')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    try {
      if (category) {
        const filtered = items.filter(item => item.category === category)
        setFilteredItems(filtered)
      } else {
        setFilteredItems(items)
      }
    } catch {
      console.log(error)
    }
  }, [items, category])

  return (
    <div className=' flex justify-center items-center min-h-screen'>
      {loading ? (
        <Barloader />
      ) : (
        <section className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 px-12 items-center gap-4 pt-12 min-h-screen'>
          <ItemList items={filteredItems} />
        </section>
      )}
    </div>
  )
}

export default ItemListContainer
