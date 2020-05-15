import React from 'react';
import './Header.css';



const Header=({setShow,sendNav})=>{




    return(
        <header>
            <h1>Bobby Car</h1>
            <div className="item">
            <div onClick={()=>setShow(sendNav.showproduct)} className="shop">
                <h2>Product-List</h2> 
            </div>
          
            <div className="Cartlogo" onClick={()=>setShow(sendNav.showShoppingCart)}>Shopping-Cart [0]
               
            </div>
            </div>

        </header>
    )
}
export default Header;