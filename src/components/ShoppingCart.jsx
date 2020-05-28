import React from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../features/cart';
import { useForm } from 'react-hook-form';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart);
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
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
                    <img className="cart-img" src={item.product.im} alt="" />
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
                    <form onSubmit={handleSubmit(onSubmit)} className="input-fields">

                        <p className="input-header">Förnamn</p>
                        <div>
                        <input name="firstname" type="text" ref={register({ required: true,  pattern: /^[A-Za-z]+$/i })} />
                        {errors.firstname && <span>Du måste fylla i ditt förnamn</span>}
                        </div>



                        <p className="input-header">Efternamn</p>
                        <div>
                        <input name="lastname" type="text" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                        {errors.lastname && <span>Du måste fylla i ditt efternamn</span>}
                        </div>


                        <p className="input-header">Adress</p>
                        <div>
                            <input name="adress" type="text" ref={register({ required: true })} />
                            {errors.adress && <span>Du måste fylla i din adress</span>}
                        </div>

                        <p className="input-header">Postnummer</p>
                        <div>
                            <input name="post" type="text" ref={register({ required: true, pattern: /^[0-9]{3}\s*[0-9]{2}^/  })} />
                            {errors.post && <span>5 siffror</span>}
                        </div>

                        <p className="input-header">Email</p>
                        <div>
                            
                            <input name="email" type="text" ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
                            {errors.email && <span>Du måste fylla i din email adress</span>}
                                
                        </div>
                        
                        <p className="input-header">Telefon</p>
                        <div>
                            <input name="phone" type="text" ref={register({ required: true, pattern: /\+?[-0-9 ]*/ })} />
                            {errors.phone && <span>Du måste fylla i ditt telefonnummer</span>}
                        </div>
                        
                        
                        <p className="input-header">Kortnummer </p>
                        <div>
                            <input name="cardnumber" type="text" ref={register({ required: true, pattern: /^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/ })} />
                            {errors.cardnumber && <span>16 siffror</span>}
                        </div>
                        <p className="input-header cvc-header">Cvc </p>   
                            <div>
                                <input name="cvc" className="cvc" type="text" ref={register({ required: true, pattern: /^[0-9]{3}$/ })} /> 
                                    {errors.cvc && <span>3 siffror</span>}
                            </div>
                        
                        
                        <button type="submit" className="cta-button">Köp nu</button>
                        {/* onClick={alert("Hello! I am an alert box!!")} */}
                        
                    </form>
                    {/* <input type="submit"/> */}
                   
                </div>
            </div>
        </>
    )
}
export default ShoppingCart;