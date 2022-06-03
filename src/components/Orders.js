import React, { useEffect } from 'react';

function Orders ({
                orders,
                setOrders,
                baseUrl
            }) {
    useEffect (() => {
        fetch(baseUrl + 'orders')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setOrders(data);
        });
    }, []);

    function cancelOrder (item) {
        fetch(baseUrl + 'orders/' + item.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            setOrders(() => {
                return orders.filter((orderedItem, index) => {
                    if (item.id != orderedItem.id) {
                        return orderedItem;
                    }
                })
            });
        })
    }

    return (
        <div className="orders">
            {orders.length > 0 ? 
                orders.map((item) => (
                    <div className="ordered-items">
                        <div className="ordered-item-img">
                            <img src={item.image}/>
                        </div>
                        <div className="item-info-and-options">
                            <div className="ordered-item-info">
                                <div className="item-name">
                                    {item.name}
                                </div>
                                <div className="item-price">
                                    &#8377; {item.price}
                                </div>
                            </div>
                            <div className='cancellation-option'>
                                <div className='cancel-order'
                                onClick={() => {cancelOrder(item)}}>
                                    Cancel Order
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div></div>
            }
        </div>
    );
}

export default Orders;