import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { useCart } from "../context/CartContext"


export default  function NavCart() {

      const { cartItems, toggleCart , showCart} = useCart();

   
    return(
        <>
            <div className="add-to-cart-container" id="add-to-cart" > 
                <div className="cart-icon-container" onClick={toggleCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    {cartItems.length > 0 && <span className="addtocart-item-count"
                     id="cart-item-count"  >
                        {cartItems.length}
                    </span>
                    }
                    <span className="cart-text-container">Cart</span>
                </div>
            </div>
         
        </>
     
    )
}


