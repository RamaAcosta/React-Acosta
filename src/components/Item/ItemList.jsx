import React from 'react'
import ItemCard from './ItemCard'
import { NavLink } from 'react-router-dom'

const ItemList = ({ items }) => {
  return (
    <>
      {items.map(item => (
        <NavLink
          key={item.id}
          to={`/item/${item.id}`}
        >
          <ItemCard
            key={item.id}
            item={item}
          />
        </NavLink>
      ))}
    </>
  )
}

export default ItemList
