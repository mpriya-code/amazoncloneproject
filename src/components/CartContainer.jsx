import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'

import { useCart } from "../context/CartContext";

export default function CartContainer() {
 
  const { cartItems, showCart, toggleCart ,  addToCart,
                removeFromCart} = useCart();

    if (!showCart) return null; // hides cart when false

    //  Calculate total dynamically
     const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
      
       <aside id="cart-container">
            <div id="cart-items">
                <p className="total-title">Subtotal</p>
                <p className="total-value">&#8377;{total.toFixed(2)}</p>
                <button id="close-cart" className="close-cart-button" onClick={toggleCart}>Close Cart</button>
                <div className="cart-item-divider"></div>
                <ul>  
                    { cartItems.map((item) => (
                    <li key={item.id}>
                        <div className="cart-item-container-row">
                        <div className="cart-img">
                        <img src={item.thumbnail} className="cart-display-img"/>
                        </div>
                        <span className="cart-price">{item.price}</span>
        
                        <div className="add-remove-cart-item">
                            <button className="cart-display-btn" 
                            id="cart-decreement-button">
                                 <FontAwesomeIcon icon={faTrash}  
                                    id="decrement"
                                    onClick={()=> removeFromCart(item)}
                                 />
                                </button>
                            <span className="cart-qty-display" id="cart-qty">{item.quantity}</span>
                            <button className="cart-display-btn" id="cart-increement-button">
                                  <FontAwesomeIcon icon={faPlus} 
                                     id="increement"  
                                    onClick={()=> addToCart(item)}/>
                            </button>
                        </div>  
                        <div className="cart-item-divider"></div>     
                        </div>
                     </li>
                    ))}
                </ul>
            </div>
        </aside>
       
    )
}

