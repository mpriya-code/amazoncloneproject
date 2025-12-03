import '../css/product-container.css'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useProducts } from "../context/ProductContext";

export default function ProductContainer() {

    //  Pulls state directly from context
    const { state } = useProducts();
    const productsToShow = state.selectedProduct ? [state.selectedProduct] : state.products;

  if (state.loading) return <div>Loading...</div>;
  if (state.error) return <div>Error: {state.error}</div>;
      
    return(
         <div id="product-container">
            {Array.isArray(productsToShow) ? (
                productsToShow.map((p) => (<ProductCard key={p.id} product= {p} />)
              )) : (
                <p>No products found or invalid data</p>
            )}
        </div>  
    )
} 

