import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart);
    let sum = 0;
    data.forEach(cartItem => { sum += cartItem.product.price * cartItem.count });




    let productsInCart = data.map(item => {
        return (
            <div key={item.product.name}>
                <div className="cart product-container">
                    <p className="cart-product">{item.product.name}</p>
                    <div>
                        <button className="decrease"
                            onClick={() => dispatch(actions.decreaseAmount(item.product.name))}
                            disabled={item.count === 0}
                        >-</button>
                        <p className="cart-product count">{item.count}</p>
                        <button className="increase" onClick={() => dispatch(actions.increaseAmount(item.product.name))}>+</button>
                    </div>
                    <p className="cart-product">{item.product.price} kr</p>
                    <button className="delete-button" onClick={() => dispatch(actions.removeFromCart(item.product.name))}>X</button>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="cart">
                <div className="cart cart-headers">
                    <h4>Products</h4>
                    <h4>Amount</h4>
                    <h4>Price</h4>
                </div>
                {productsInCart}
                <p>Total: {sum} kr</p>
            </div>
        </>
    )



}

export default Cart;