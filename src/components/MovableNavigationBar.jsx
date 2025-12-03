import { useCart } from "../context/CartContext";
export default function MovableNavigationBar() {
    
     const { cartItems, showCart, toggleCart } = useCart();
    return (
        // Movable Navigation Bar 
          <nav className={`nav ${showCart ? "cart-open" : ""}`} id="movable-nav">
            <div className="container-nav">
                <ul>
                    <li className="border-white"><a href="#">Best Sellers</a></li>
                    <li className="border-white"><a href="#">Today's Deals</a></li>
                    <li className="border-white"><a href="#">Mobiles</a></li>
                    <li className="border-white"><a href="#">Customer Service</a></li> 
                    <li className="border-white"><a href="#">Electronic</a></li>
                    <li className="border-white"><a href="#">Home & Kitchen</a></li>
                    <li className="border-white"><a href="#">Fashion</a></li>
                    <li className="border-white"><a href="#">Book</a></li>  
                </ul>
             </div>
         </nav> 
    )
}