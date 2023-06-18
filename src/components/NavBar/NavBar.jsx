import React from 'react'
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className='top-nav-wrapper'>
            <h1 className="nav-label-left">FlashThread</h1>
            <h1 className="desktop-only"><a href="index.html">Home</a></h1>
            <h1 className="desktop-only"><a href="products.html">Products</a></h1>
            <h1 className="desktop-only"><a href="cart.html">Cart</a></h1>
            <h1 className="desktop-only"><a href="admin.html">Login</a></h1>
        </div>
    )
}