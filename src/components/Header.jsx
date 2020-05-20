import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';


const Header = ({ setShow, sendNav }) => {
    const cart = useSelector(state => state.cart);
    let count = 0;
    cart.forEach(cartItem => { count += cartItem.count; });



    return (
        <header>
            <h1>Bobby Car</h1>
            <div className="item">
                <div onClick={() => setShow(sendNav.showproduct)} className="shop">
                    <h2>Product-List</h2>
                </div>

                <div className="Cartlogo" onClick={() => setShow(sendNav.showShoppingCart)}>Shopping-Cart [{count}]

            </div>
            </div>

        </header>
    )
}
export default Header;