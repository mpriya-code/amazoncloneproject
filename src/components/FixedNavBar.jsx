import '../css/fixed-navbar.css'
import "../css/nav-location.css"
import "../css/search-bar.css"
import NavGlobalLocation from './NavGlobalLocation'
import SearchBar from './SearchBar'
import NavRightComponents from './NavRightComponents'

import { useCart } from "../context/CartContext";

export default function FixedNavBar({scrollWidth}) {

    const { cartItems, showCart, toggleCart } = useCart();
    return(
        <>        
           {/*  Fixed Navigation Bar   */}   
             <nav className={`fixed-nav-bar ${showCart ? "nav-cart-open" : ""}`} 
                  id="fixed-nav"
             > 
                 <div className="nav-left">
                      <div className="nav-logo">
                        <a className="nav-logo-link">
                            <img  src="images/nav-logo.png" alt="amazon" /> 
                            <span className="nav-logo-text">.in</span>  
                        </a>
                      </div>

                      {/*  Location in Fixed Navigation Bar   */} 
                       <NavGlobalLocation/> 
                 </div>

                  {/*  Search Navigation Bar   */}  
                 <div className="nav-center">
                    <SearchBar/>
                </div> 

                  {/*  Right  Navigation Bar   */}  
                <div className="nav-right">
                    <NavRightComponents/>
                </div>

                 
            </nav>
        </>
    )
}