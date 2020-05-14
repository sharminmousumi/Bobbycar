import React from 'react';
import './product.css';
import img1 from '../images/447265.jpeg';




const Product = () => {
    const productList=[
        {name:'Classic Racer', price:600,img:<img src={img1} alt="img1" /> },
        {name:'Car Delux', price:400},
        {name:'Car Ledljus', price:700},
        {name:'Car Classic Fulda', price:200},
        {name:'Car Neo', price:800},
        {name:'Car porse', price:600},
        {name:'Car Bmw', price:400},
        {name:'Car Mercdeze', price:700},
        {name:'Car Peoso', price:200},
        {name:'Car Renult', price:800},
        {name:'Car Honda', price:200},
        {name:'Car Toyota', price:800},
        ]
        
        
        const data=productList.map(item=> (
            
            <div  key={item.name}> 
            <div  className="grid-item">
            {item.name}<br/>
            {item.price} <br/>
            <button className="but">Add to Shopping</button>
            
            </div>
             </div>
            
        ))
    return (
        <div>
            <div className="products">
                
            {data}
            
            </div>
            
            
        </div>
    );
};

export default Product;
