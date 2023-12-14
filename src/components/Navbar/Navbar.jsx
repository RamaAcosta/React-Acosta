import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <>
      <NavLink to='/'>
        <h1 className='fixed py-2 px-12 text-xl font-bold z-20 '>SHOPHUB</h1>
      </NavLink>

      <nav className=' fixed px-12 flex items-center h-12 z-10 justify-center inset-x-0 mx-auto bg-white bottom-0 md:top-0 text-sm md:text-base'>
        <ul className='flex justify-around gap-8 font-medium '>
          <li className='hover:border-b-blue-600 border-b-2 border-transparent transition-all mt-2'>
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
      </nav>
      <NavLink to='/cart'>
        <CartWidget />
      </NavLink>
    </>
  )
}

export default Navbar
