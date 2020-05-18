import React from 'react';
import "./Cart.css";

const Cart = () => {
    let fakeData = [
        {
            model: "Bobbycar V2.0",
            color: "Blue",
            count: 1,
            price: 500,
            img: "https://i.imgur.com/thkn6UK.png"
        },
        {
            model: "Leeroy Jenkins",
            color: "red",
            count: 1,
            price: 1200,
            img: "https://i.imgur.com/thkn6UK.png"
        },
        {
            model: "Leeroy Jenkins",
            color: "red",
            count: 1,
            price: 1200,
            img: "https://i.imgur.com/thkn6UK.png"
        },
        {
            model: "Leeroy Jenkins",
            color: "red",
            count: 1,
            price: 1200,
            img: "https://i.imgur.com/thkn6UK.png"
        },
        {
            model: "Leeroy Jenkins",
            color: "red",
            count: 1,
            price: 1200,
            img: "https://i.imgur.com/thkn6UK.png"
        }

    ]


    let productsInCart = fakeData.map(product => {
        return (
            <div key={product.model} className="cart product-container">
                <p className="cart-product">{product.model}</p>
                <div>
                    <button className="increase">-</button>
                    <p className="cart-product count">{product.count}</p>
                    <button className="decrease">+</button>
                </div>
                <p className="cart-product">{product.price} kr</p>
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
            </div>
        </>
    )



}



export default Cart;