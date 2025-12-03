
import {useCart } from "../context/CartContext"

export default function ProductCard( {product} ) {
 
   const {addToCart} = useCart()
   
      if (!product) return null;
    return(
        <div className="product-card">
            <img src={product.thumbnail} alt={product.title}></img>
            <h3 className="product-card-title">{product.title}</h3>
            <p className="product-card-description">{product.description}</p>
            <p className="product-card-price">&#8377;{product.price.toFixed(2)}</p>
            <button className="product-card-button" onClick={()=> addToCart(product)}>Add To Cart</button>          
        </div>
    )
}