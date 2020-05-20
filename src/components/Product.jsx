/* eslint-disable */
import React, { useState } from 'react';
import './product.css';
//import img from './447265.jpeg'
import image from '../images/car.png'

const Product = () => {
    
    const productList=[
        {name:'Classic Racer', price:600, image:'../images/447265.jpeg'},
        {name:'Delux ', price:400, image:'../images/447265.jpeg'},
        {name:'Ledljus', price:700, image:'../images/447265.jpeg'},
        {name:'Fulda classic', price:300, image:'../images/447265.jpeg'},
        {name:'Neo', price:800, image:'../images/447265.jpeg'},
        {name:'porse', price:600, image:'../images/447265.jpeg'},
        {name:'Bmw', price:400, image:'../images/447265.jpeg'},
        {name:'Mercdeze', price:700, image:'../images/447265.jpeg'},
        {name:'Peoso', price:200, image:'../images/447265.jpeg'},
        {name:'Renult', price:800, image:'../images/447265.jpeg'},
        {name:'Honda',price:900, image:'../images/447265.jpeg'},
        {name:'Toyota', price:800,image:'../images/447265.jpeg'},
        ]
        
        
        const [sort, setSort]=useState("");
        const data = productList.map((item)=> {
            if(sort.length !== 0) {
                if (item.name.toUpperCase().match(sort.toUpperCase())
                ||(item.price.toString().match(sort.toString()))
                
                ) {
             return <div  key={item.name}> 
                    <div  className="grid-item">
                    <div className="model"> Model:{item.name}</div>
                        {item.price} <br/>
                        <img src={image} alt="pic"></img>
                   {/* <button className="but">Add to Shopping</button> */}
            </div>
            </div>
                }
                else {
                    return null
                }
            }
          
            return  
                    <div key={item.price}> 
                
                         <div  className="grid-item">
           
                                <div className="model"> Model:{item.name}</div>
                                Från:{item.price} <br/>
                        <           img src={image} alt="pic"/>
                                     {/* <button className="but" >Add to Shopping</button> */}
            
                            </div>
                    </div>
        
            
        })
    return (
        <div >
            <div className="search">
            <label >Köp din bil lalala</label> <span>    </span>
            <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
            </div>
            
            <div className="products">
                            
            {data}
            
            </div>
            
            
        </div>
    );
};

export default Product;
