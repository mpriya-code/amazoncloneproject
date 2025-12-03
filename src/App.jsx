import "./App.css"
import "./css/MainLayout.css"
import Home from "./layout/Home"
// import { CartProvider } from "./context/CartContext"

// import { ProductFilterProvider } from "./context/ProductFilterContext"

import { CategoryProvider } from '../src/context/CategoryContext'
import { ProductProvider } from '../src/context/ProductContext';


function App() {

  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <Home/>
        </ProductProvider>
      </CategoryProvider>
    </>
  )
}

export default App
