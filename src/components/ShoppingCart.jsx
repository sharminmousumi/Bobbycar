import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';


const ShoppingCart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart);
    let sum = 0;
    data.forEach(cartItem => { sum += cartItem.product.price * cartItem.count });




    let productsInCart = data.map(item => {
        return (
            <div key={item.product.name}>
                <div className="cart product-container">
                    <div className="cart-header">
                        <h4 className="cart-product-model">{item.product.name}</h4>
                        <button className="delete-button" onClick={() => dispatch(actions.removeFromCart(item.product.name))}>X</button>
                    </div>
                    <div className="product-info">
                        <div className="cart-price-count">
                            <p className="cart-product-price">Pris: {item.product.price}kr</p>
                            <p className="cart-product-count">Antal: {item.count}</p>
                        </div>
                        <div className="count-buttons" >
                            <button className="count-button-up" onClick={() => dispatch(actions.increaseAmount(item.product.name))} ><i className="arrow up"></i></button>
                            <button className="count-button-down" onClick={() => dispatch(actions.decreaseAmount(item.product.name))}
                                disabled={item.count === 0} ><i className="arrow down"></i></button>
                        </div>

                    </div>
                    <img src={item.product.image} alt="" />
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="container">
                <div className="cart">
                    <h1>Kassa</h1>
                    {productsInCart}
                    <p className="sum">Total: {sum}kr</p>
                </div>
            </div>
        </>
    )



}

export default ShoppingCart;
