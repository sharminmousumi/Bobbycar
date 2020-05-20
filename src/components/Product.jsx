import React, { useState } from 'react';
import './product.css';
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
    return (
        <div className="search">
            <input className="SearchProduct" type="text" placeholder="search..." value={sort} onChange={(event) => setSort(event.target.value)} />
            <div className="products">

                {data}

            </div>


        </div>
    );
};

export default Product;
