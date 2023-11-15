import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center h-12 fixed w-full z-40 bg-white shadow-md'>
      <NavLink to='/'>
        <h1 className='font-bold text-xl py-2 px-4 hover:border-black hover:bg-black hover:text-white transition-all rounded'>
          SHOPHUB
        </h1>
      </NavLink>

      <ul className='flex justify-around gap-8 font-medium'>
        <li className='hover:border-b-blue-600 border-b-2 pb-2 border-transparent transition-all mt-2'>
          <NavLink to={`/products/category/jewelery`}>Jewelery</NavLink>
        </li>
        <li className='hover:border-b-blue-600 border-b-2 pb-2 border-transparent transition-all mt-2'>
          <NavLink to={`/products/category/electronics`}>Electronics</NavLink>
        </li>
        <li className='hover:border-b-blue-600 border-b-2 pb-2 border-transparent transition-all mt-2'>
          <NavLink to={`/products/category/women's clothing`}>Women's clothing</NavLink>
        </li>
        <li className='hover:border-b-blue-600 border-b-2 pb-2 border-transparent transition-all mt-2'>
          <NavLink to={`/products/category/men's clothing`}>Men's clothing</NavLink>
        </li>
      </ul>
      <NavLink to='/cart'>
        <CartWidget />
      </NavLink>
    </nav>
  )
}

export default Navbar
