import React, { useState } from 'react';
import './product.css';
import images from '../images/background.jpg';





const Product = () => {
    
    const productList=[
        {name:'Classic Racer', price:600,im:<img className="set bobby" src="img/bobby1.jpeg" alt="bobby" />},
        {name:'Delux ', price:400,im:<img className="set bobby" src="img/bobby2.jpg" alt="bobby2" />},
        {name:'Ledljus', price:700,im:<img className="set bobby" src="img/bobby3.jpg" alt="bobby3" />},
        {name:'Fulda classic', price:200,im:<img className="set bobby" src="img/bobby4.jpg" alt="bobby" />},
        {name:'Neo', price:800,im:<img className="set bobby" src="img/bobby5.jpg" alt="bobby" />},
        {name:'porse', price:600,im:<img className="set bobby" src="img/bobby6.jpg" alt="bobby" />},
        {name:'Bmw', price:400,im:<img className="set bobby" src="img/bobby7.jpg" alt="bobby" />},
        {name:'Mercdeze', price:700,im:<img className="set bobby" src="img/bobby8.jpg" alt="bobby" />},
      
        ]
       
        
        
        const [sort, setSort]=useState("");
        const data = productList.map((item)=> {
            if(sort.length !== 0) {
                if (item.name.toUpperCase().match(sort.toUpperCase())
                ||(item.price.toString().match(sort.toString()))
                
                ) {
             return <div  key={item.name}> 
                    <div  className="grid-item">
                   {item.name}<br/>
                   {item.price} <br/>
                   <div className="image">
                    {item.im} 
                    </div>
                   
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
            <div className="image">
            {item.im} 
            
            </div>
            
            
            </div>
             </div>
            
        })
    return (
        <div className="container2">
        <div className="container1">
            <img className="backgroundimg"   src={images} alt="background"/>
            <div className="bottom-right">
                <h1>Köp din bobby car online</h1>
                <p>Fri frakt på allt</p>
                <p>Livstid service</p>
                <p>Snabbast och säkrast</p>
            </div>
            </div>
            
                <div className="container">
                    <div className="search">
                        <p>köp din bil lalala</p>
                    <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
                    </div>
                    <div className="products"> 
                    {data}
                    </div>
            </div>
            
            
        </div>
    );
};

export default Product;
