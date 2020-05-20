import React from 'react';
import './Header.css';



const Header=({setShow,sendNav})=>{




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
                </li>
            </ul>
            
          
            
     

        </header>
    )
}
export default Header;