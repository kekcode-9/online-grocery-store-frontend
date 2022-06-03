function ProductsList ({products,
                        setProducts,
                        cart,
                        setCart,
                        baseUrl,
                        removeFromCart}) {

    function addToCart(item) {
        item.addedToCart = 'yes';

        fetch(baseUrl + 'cart', {
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
          setCart(() => {
                return [...cart, data]; //all items in cart are as is and then you append newItem
            });
        });

        fetch(baseUrl + 'products/' + item.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(item)
        })
    }

    return (
        <div className='products-list'>
            <div className='wrapper'>
                {products && Array.from(products).map((item) => (
                    <div className='item' key={item.id}>
                        <div className='prod-image'>
                            <img src={item.image} alt={item.name}/>
                        </div>
                            <div className='item-info'>
                                <div className='item-name'>
                                    {item.name}
                                </div>
                                <div className='item-price'>
                                    &#8377; {item.price}
                                </div>
                            </div>
                            <div className="actions"
                            style={{
                                justifyContent: (item.addedToCart === 'yes') ? 'space-around' : 'center'
                            }}
                            >
                                <div className='add-to-cart-button' onClick={() => addToCart(item)}>
                                    add to cart
                                </div>
                                <div className="remove-item-from-cart"
                                style={{
                                    display: (item.addedToCart === 'yes') ? 'flex' : 'none'
                                }}
                                onClick={() => removeFromCart(item)}
                                >
                                    remove from cart
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsList;