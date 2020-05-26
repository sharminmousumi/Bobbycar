  
import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';


const Header=({setShow,sendNav})=>{
    const cart = useSelector(state => state.cart);
    let count = 0;
    cart.forEach(cartItem => { count += cartItem.count; });

    return(
        <header>
            <ul className="item">
                <li onClick={()=>setShow(sendNav.showproduct)}>
                    Shop
                </li>
                <li>
                    <img className="bobbyIcon" src="img/bobbybuilder3.png" alt="Bobby Builder" />
                </li>
                <li onClick={()=>setShow(sendNav.showShoppingCart)}>
                <img className="shopIcon" src="img/Shopping-Cart-icon.png" alt="cart" />
                <span>[{count}]</span>
                </li>
            </ul>
        </header>
    )
}
export default Header;