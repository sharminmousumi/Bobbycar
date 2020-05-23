import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';





function App() {
  const showproduct = 'product', showShoppingCart = 'Cart';
  const [show, setShow] = useState(showproduct);
  let Body = 0;
  if (show === showproduct) {
    Body = <Product />
  } else {
    Body = <ShoppingCart />
  }
  return (
    <div className="App">
     

        <Header setShow={setShow} sendNav={{showproduct,showShoppingCart}}/>
        <main>
        {Body}
          
          </main>
        <Footer/>

    </div>
  );
}

export default App;