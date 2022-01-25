//rfce
import React from "react";
import {AiOutlineShoppingCart} from "react-icons/ai"

function NavBar(){
    return(
        <div className="navBar">
            <a>My store</a>
            <div className="cart-items"><AiOutlineShoppingCart></AiOutlineShoppingCart></div>
            <p className="cart-num">0</p>
        </div>
    );
}

export default NavBar;