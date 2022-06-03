import { useEffect } from "react";

function Cart ({
                cart,
                setCart,
                orders,
                setOrders,
                baseUrl,
                removeFromCart
            }) {

    useEffect (() => {
        fetch(baseUrl + 'cart')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setCart(data);
        });
    }, []);

    function orderItem (item) {
        fetch(baseUrl + 'orders', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
          })
          .then(res => {
              return res.json()
          })
          .then(data => {
            setOrders(() => {
                  return [...orders, data]; //all items in cart are as is and then you append newItem
              });
        });
    }

    return (
        <div className="cart">
            {cart.length > 0 ? 
                cart.map((item) => (
                    <div className="cart-contents" key={item.id}>
                        <div className="cart-item-img">
                            <img src={item.image}/>
                        </div>
                        <div className="item-info-and-options">
                            <div className="cart-item-info">
                                <div className="item-name">
                                    {item.name}
                                </div>
                                <div className="item-price">
                                    &#8377; {item.price}
                                </div>
                            </div>
                            <div className="options">
                                <div className="remove-from-cart"
                                onClick={() => {removeFromCart(item)}}>
                                    remove from cart
                                </div>
                                <div className="payout"
                                onClick={() => {orderItem(item)}}>
                                    payout
                                </div>
                            </div>
                        </div>
                    </div>
                )) 
                : 
                (<div className="empty-cart-message">
                    Your cart is empty.
                </div>)
            }
        </div>
    );
}

export default Cart;