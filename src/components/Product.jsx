/* eslint-disable */


import React, { useState } from 'react';
import './product.css';
import images from '../images/background.jpg';
import { useDispatch } from 'react-redux';
import { actions } from "../features/cart";

const Product = () => {
    const dispatch = useDispatch();
    const productList = [
        {name:'Classic Racer', price:600,im:"img/bobby1.jpeg" },
        {name:'Delux ', price:400,im:"img/bobby2.jpg"},
        {name:'Ledljus', price:700,im:"img/bobby3.jpg"},
        {name:'Fulda classic', price:200,im:"img/bobby4.jpg"},
        {name:'Neo', price:800,im:"img/bobby5.jpg"},
        {name:'porse', price:600,im:"img/bobby6.jpg"},
        {name:'Bmw', price:400,im:"img/bobby7.jpg"},
        {name:'Mercdeze', price:700,im:"img/bobby8.jpg"},   
    ]

     // Prints out the objects that are searched for.  
    const [sort, setSort]=useState("");
    const data = productList.map((item)=> {
   const handleClick = () => dispatch(actions.addToCart(item))
        if(sort.length !== 0) {
            if (item.name.toUpperCase().match(sort.toUpperCase())
            ||(item.price.toString().match(sort.toString()))
            
            ) {
            return <div  key={item.name}> 
                        <div  className="grid-item" >
                        <a> Model: {item.name}</a>
                        <p> Price: {item.price} </p>
                        <img src={item.im} alt="bobby2" />
                        <button className="but" onClick={handleClick}>Add to Shopping</button>  
                    </div>
                </div>
            }
            else {
                return null
            }
        }
     //end of search print   

     //prints out all the available objects
    return <div  key={item.name}> 
                <div  className="grid-item" >
                    <a> Model: {item.name}</a>
                    <p> Price: {item.price} </p>
                    <img src={item.im} alt="bobby2" />
                    <button className="but" onClick={handleClick}>Add to Shopping</button>  
                </div>
            </div>
        })
    return (

        <div className="wrapper">
            <div className="bigPictureWrapper">
                <img className="backgroundimg"   src={images} alt="background"/>
                <div className="bottom-right">
                    <h1>Köp din bobby car online</h1>
                    <p>Fri frakt på allt</p>
                    <p>Livstid service</p>
                    <p>Snabbast och säkrast</p>
                </div>
            </div>

            
            <div className="itemSearchContainer">

            <form>
                <div className="row">
                    <div  className="col-25">
                        <label ></label>
                    </div>
                    <div className="col-75">
                    <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
                    </div>
                </div>
            </form>
                {/* <form className="search">
                    <label className="searchFornt">köp din bil här</label>
                    <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
                </form> */}
                <div className="products">
                {data}
                </div>
            </div>
        </div>
    );
};

export default Product;
