import { products as InitialProducts} from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'
import { IS_DEVELOPMENT } from './Config.js'
import {useFilters} from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {
  const [products] = useState(InitialProducts)
  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT&&<Footer filters={filters}/>}
    </CartProvider>
  )
}

export default App
