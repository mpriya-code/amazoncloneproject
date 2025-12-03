import { useState } from "react"
import { useRef, useEffect} from 'react'

import FixedNavBar from "../components/FixedNavBar"
import MovableNavigationBar from "../components/MovableNavigationBar"
import CarouselContainer from "../components/CarouselContainer"
import SideBar from "../components/SideBar"

import CartContainer from "../components/CartContainer"
import ProductContainer from "../components/ProductContainer"

import "../css/movable-nav-bar.css"
import "../css/sidebar.css"
import "../css/product-container.css"
import "../css/add-to-cart.css"

import { useCart } from "../context/CartContext"




export default function Home() {

   const carouselImages = [
        './images/image8.jpg', 
        './images/image7.jpg',
        './images/image3.jpg',
        './images/image6.jpg',
        './images/image5.jpg'
    ];  

    const { cartItems, showCart, toggleCart } = useCart();

    return (
        
         <div className="main-layout"> 
         
            {/* Sticky Navigation Bar */}     
            <FixedNavBar />

        <div className="scroll-container" >

            {/* Movable Navigation Bar */}
            <MovableNavigationBar/>     
             
            {/* Layout */}
            <div className = {`layout-container ${showCart ? "cart-open" : ""}`}  >

                {/* Fixed SideBar */}
                <SideBar />
       
                 <section id = "main-content" >

                    {/*  Carousel Images   */}
                    <CarouselContainer  />
            
                    {/*  Products Display Bar     */}
                    <ProductContainer />

                </section>

            </div>
                {showCart && <CartContainer />}
        </div>

        </div>
       
    )
}


