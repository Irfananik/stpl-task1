// use local storage to data manage
const adToCartToLocalStorage = id => {
    let shoppingCart = getShoppingCart();

    // add quantity
    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }
    else{
        const nweQuantity = quantity + 1;
        shoppingCart[id] = nweQuantity;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromCartToLocalStorage = id => {
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    // get the shopping cart from localStorage
    const storeCart = localStorage.getItem('shopping-cart');
    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }

    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


export{
    adToCartToLocalStorage,
    removeFromCartToLocalStorage,
    getShoppingCart,
    deleteShoppingCart
}