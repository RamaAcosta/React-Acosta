import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/Item/ItemListContainer'
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App
