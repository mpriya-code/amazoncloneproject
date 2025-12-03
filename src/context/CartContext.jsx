import { createContext, useContext, useState , useEffect} from  'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const[cartItems, setCartItems] = useState([])

    const [showCart, setShowCart] = useState(false);

    //Add cart items
    const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  
     setShowCart(true); // show cart when adding     
   } 

   //remove cart items
     const removeFromCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
         
         if (existingItem.quantity > 1) {
           setCartItems(
            cartItems.map((itm)=>
              itm.id == product.id ? ({...itm , quantity: itm.quantity-1})
               : itm
              )
           )
          } else {
           setCartItems(cartItems.filter((item) => item.id !== product.id));
          }
       }


    const toggleCart = () => {
       setShowCart((prev) => !prev);
    }

    return(
        <CartContext.Provider
             value= {{
                cartItems,
                addToCart,
                removeFromCart,
                showCart, 
                toggleCart
             }}>
                {children}
        </CartContext.Provider>        
    );
}

export const useCart = () => useContext(CartContext)
export default CartContext;