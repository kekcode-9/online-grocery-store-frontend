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
  const baseUrl = 'https://grocery-store-app-server.herokuapp.com/' || 'http://localhost:8000';
  const location = useLocation();

  useEffect(() => {
    fetch(baseUrl + 'products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setProducts(data);
    });
  }, []);

  function removeFromCart (item) {
    item.addedToCart = 'no';

    fetch(baseUrl + 'cart/' + item.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => {
        setCart(() => {
            return cart.filter((cartItem, index) => {
                if (item.id != cartItem.id) {
                    return cartItem;
                }
            })
        });
    });

    fetch(baseUrl + 'products/' + item.id, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
        },
      body: JSON.stringify(item)
    });
  }


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
            removeFromCart = {removeFromCart}
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
            removeFromCart = {removeFromCart}
            /> 
          }
        />}
      </Routes>
    </div>
  );
}

export default App;
