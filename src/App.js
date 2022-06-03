import { Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const baseUrl = 'http://localhost:8000/';
  const location = useLocation();

  useEffect(() => {
    fetch(baseUrl + 'products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setProducts(data);
        console.log('here: ' + products);
    });
  }, []);


  return (
    <div className="App" location={location} key={location.pathname}>
      <Navbar cart={cart} orders={orders}/>
      <Routes>
        <Route path='/cart' 
          element=
          {
            <Cart
            cart = {cart}
            setCart = {setCart}
            orders = {orders}
            setOrders = {setOrders}
            baseUrl = {baseUrl}
            />
          }
        />
        <Route path='/orders' 
          element=
          { <Orders
            orders = {orders}
            setOrders = {setOrders}
            baseUrl = {baseUrl}
            /> 
          }
        />
        {products &&
        <Route path='/'
          element=
          { <ProductsList 
            products = {products}
            setProducts = {setProducts}
            cart = {cart}
            setCart = {setCart}
            baseUrl = {baseUrl}
            /> 
          }
        />}
      </Routes>
    </div>
  );
}

export default App;
