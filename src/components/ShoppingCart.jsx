import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';


const ShoppingCart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart);
    let sum = 0;
    data.forEach(cartItem => { sum += cartItem.product.price * cartItem.count });

    let itemSummary = data.map(item => {
        return (
            <div key={item.product.name} className="item-summary">
                <div>
                    <h4>{item.product.name}</h4>
                    <p>Antal: {item.count}</p>
                </div>
                <div>
                    <p>{item.product.price}Kr</p>
                    <p>{item.count * item.product.price}Kr</p>
                </div>
            </div>
        )
    })

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
                    <img src={item.product.im} alt="" />
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
                    <h2>Summering</h2>
                    {itemSummary}
                    <p className="sum">Totalt: {sum}Kr</p>
                    <div className="input-fields">
                        <p className="input-header">Förnamn</p>
                        <input type="text" />
                        <p className="input-header">Efternamn</p>
                        <input type="text" />
                        <p className="input-header">Adress</p>
                        <input type="text" />
                        <p className="input-header">Postnummer</p>
                        <input type="text" />
                        <p className="input-header">Email</p>
                        <input type="text" />
                        <p className="input-header">Telefon</p>
                        <input type="text" />
                        <div className="input-card-info">
                            <div><p className="input-header">Kortnummer </p>
                                <input type="text" />
                            </div>
                            <div>
                                <p className="input-header cvc-header">Cvc </p>
                                <input type="text" className="input-cvc" />
                            </div>
                        </div>
                        <button className="cta-button">Köp nu</button>
                    </div>
                </div>
            </div>
        </>
    )



}

export default ShoppingCart;
