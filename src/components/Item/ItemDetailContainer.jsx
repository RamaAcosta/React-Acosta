import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Barloader from 'react-spinners/BarLoader'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import CartContext from '../../Context/CartContext'

const ItemDetailContainer = () => {
  const [item, setItem] = useState()
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, 'items', id)

    getDoc(itemRef).then(snapshot => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() })
      }
    })
  }, [])

  const onAdd = quantity => {
    addToCart(item, quantity)
  }

  return (
    <section className='flex justify-center items-center min-h-screen'>
      {!item ? (
        <Barloader className='' />
      ) : (
        <ItemDetail
          item={item}
          onAdd={onAdd}
        />
      )}
    </section>
  )
}

export default ItemDetailContainer
