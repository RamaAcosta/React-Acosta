import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Item/ItemListContainer'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Toaster } from 'sonner'
import CartContextProvider from './Context/CartContextProvider'
import CheckoutInfo from './components/Cart/CheckoutInfo'

function App() {
  return (
    <>
      <CartContextProvider>
        <Toaster
          richColors
          className='toast'
        />
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/checkoutInfo/:id'
            element={<CheckoutInfo />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/products/category/:category'
            element={<ItemListContainer />}
          />
          <Route
            path='/item/:id'
            element={<ItemDetailContainer />}
          />
        </Routes>
      </CartContextProvider>
    </>
  )
}

export default App
