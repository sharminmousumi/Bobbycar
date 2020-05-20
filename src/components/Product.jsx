/* eslint-disable */
import React, { useState } from 'react';
import './product.css';
<<<<<<< HEAD
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
=======
import { useDispatch } from 'react-redux';
import { actions } from "../features/cart";




const Product = () => {
    const dispatch = useDispatch();
    const productList = [
        { name: 'Classic Racer', price: 600 },
        { name: 'Delux ', price: 400 },
        { name: 'Ledljus', price: 700 },
        { name: 'Fulda classic', price: 200 },
        { name: 'Neo', price: 800 },
        { name: 'porse', price: 600 },
        { name: 'Bmw', price: 400 },
        { name: 'Mercdeze', price: 700 },
        { name: 'Peoso', price: 200 },
        { name: 'Renult', price: 800 },
        { name: 'Honda', price: 200 },
        { name: 'Toyota', price: 800 },
    ]
    const [sort, setSort] = useState("");
    const data = productList.map((item) => {
        const handleClick = () => dispatch(actions.addToCart(item))
        if (sort.length !== 0) {
            if (item.name.toUpperCase().match(sort.toUpperCase())
                || (item.price.toString().match(sort.toString()))

            ) {
                return <div key={item.name}>
                    <div className="grid-item">
                        {item.name}<br />
                        {item.price} <br />
                        <button className="but">Add to Shopping</button>
                    </div>
                </div>
            }
            else {
                return null
            }
        }

        return <div key={item.name}>
            <div className="grid-item">
                Model:{item.name}<br />
            Price:{item.price} <br />
                <button className="but" onClick={handleClick}>Add to Shopping</button>

            </div>
        </div>

    })
>>>>>>> 976f8170f4bd4781a0097304d1890046bfd4e6d0
    return (
        <div >
            <div className="search">
            <label >Köp din bil lalala</label> <span>    </span>
            <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
            </div>
            
            <div className="products">
<<<<<<< HEAD
                            
            {data}
            
=======

                {data}

>>>>>>> 976f8170f4bd4781a0097304d1890046bfd4e6d0
            </div>


        </div>
    );
};

export default Product;
