import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Footer />

    </div>
  );
}

export default App;
