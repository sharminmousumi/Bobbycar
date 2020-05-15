import React, { useState } from 'react';
import './product.css';
import img1 from '../images/447265.jpeg';




const Product = () => {
    
    const productList=[
        {name:'Classic Racer', price:600 },
        {name:'Delux ', price:400},
        {name:'Ledljus', price:700},
        {name:'Fulda classic', price:200},
        {name:'Neo', price:800},
        {name:'porse', price:600},
        {name:'Bmw', price:400},
        {name:'Mercdeze', price:700},
        {name:'Peoso', price:200},
        {name:'Renult', price:800},
        {name:'Honda', price:200},
        {name:'Toyota', price:800},
        ]
        
        
        const [filter, setFilter]=useState("");
        const data = productList.map((item)=> {
            if(filter.length !== 0) {
                if (item.name.toUpperCase().match(filter.toUpperCase())
                
                ) {
             return <div  key={item.name}> 
                    <div  className="grid-item">
                   {item.name}<br/>
                   {item.price} <br/>
                    <button className="but">Add to Shopping</button>
            </div>
            </div>
                }
                else {
                    return null
                }
            }
          
    return  <div  key={item.name}> 
            <div  className="grid-item">
            Model:{item.name}<br/>
            Price:{item.price} <br/>
            <button className="but">Add to Shopping</button>
            
            </div>
             </div>
            
        })
    return (
        <div>
            <input className="SearchProduct" type="text" placeholder="search..." value={filter} onChange={(event) => setFilter(event.target.value)} />
            <div className="products">
                
            {data}
            
            </div>
            
            
        </div>
    );
};

export default Product;
