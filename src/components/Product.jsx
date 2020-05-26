/* eslint-disable */


import React, { useState } from 'react';
import './product.css';
import images from '../images/background.jpg';
import { useDispatch } from 'react-redux';
import { actions } from "../features/cart";

const Product = () => {
    const dispatch = useDispatch();
    const productList = [
        {name:'Classic Racer', price:600,im:<img className="set bobby" src="img/bobby1.jpeg" alt="bobby" />},
        {name:'Delux ', price:400,im:<img className="set bobby" src="img/bobby2.jpg" alt="bobby2" />},
        {name:'Ledljus', price:700,im:<img className="set bobby" src="img/bobby3.jpg" alt="bobby3" />},
        {name:'Fulda classic', price:200,im:<img className="set bobby" src="img/bobby4.jpg" alt="bobby" />},
        {name:'Neo', price:800,im:<img className="set bobby" src="img/bobby5.jpg" alt="bobby" />},
        {name:'porse', price:600,im:<img className="set bobby" src="img/bobby6.jpg" alt="bobby" />},
        {name:'Bmw', price:400,im:<img className="set bobby" src="img/bobby7.jpg" alt="bobby" />},
        {name:'Mercdeze', price:700,im:<img className="set bobby" src="img/bobby8.jpg" alt="bobby" />},

        
    ]
    // const productList=[

    //     {name:'Classic Racer', price:600,im:<img className="set bobby" src="img/bobby1.jpeg" alt="bobby" />},
    //     {name:'Delux ', price:400,im:<img className="set bobby" src="img/bobby2.jpg" alt="bobby2" />},
    //     {name:'Ledljus', price:700,im:<img className="set bobby" src="img/bobby3.jpg" alt="bobby3" />},
    //     {name:'Fulda classic', price:200,im:<img className="set bobby" src="img/bobby4.jpg" alt="bobby" />},
    //     {name:'Neo', price:800,im:<img className="set bobby" src="img/bobby5.jpg" alt="bobby" />},
    //     {name:'porse', price:600,im:<img className="set bobby" src="img/bobby6.jpg" alt="bobby" />},
    //     {name:'Bmw', price:400,im:<img className="set bobby" src="img/bobby7.jpg" alt="bobby" />},
    //     {name:'Mercdeze', price:700,im:<img className="set bobby" src="img/bobby8.jpg" alt="bobby" />},
    // ]
       
    const [sort, setSort]=useState("");
    const data = productList.map((item)=> {
   const handleClick = () => dispatch(actions.addToCart(item))
        if(sort.length !== 0) {
            if (item.name.toUpperCase().match(sort.toUpperCase())
            ||(item.price.toString().match(sort.toString()))
            
            ) {
            return <div  key={item.name}> 
                    <div  className="grid-item">
                       {item.name}> <br/>
                        {item.price} <br/>
                        <div className="image">
                            {item.im} 
                            <button className="but" onClick={handleClick}>Add to Shopping</button>  
                        </div>
                    </div>
                </div>
            }
            else {
                return null
            }
        }
        

    return <div  key={item.name}> 
                <div  className="grid-item" >
                 {/* <div  className="grid-item" onClick={handleClick}>  */}
                    <a> Model:{item.name}</a> <br/>
                     Price:{item.price} <br/>
                    <div className="image">
                    {item.im} 
                  <button className="but" onClick={handleClick}>Add to Shopping</button>  
                        </div>
                    </div>
                {/* </div> */}
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

            <form >
                    <div className="row">
                        <div  className="col-25">
                            <label >köp din bil här</label>
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
