function getCart() {
    if (window.localStorage.getItem('cart')) {
        return JSON.parse(window.localStorage.getItem('cart'))
    } else {
        return { items: {}, total: 0 }
    }
}

function setCart(cart) {
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

function onAdd(itemName, itemPrice, itemImagePath) {
    const cart = getCart()
    // if item is not in cart, add a new entry for it
    if (!cart.items[itemName]) {
        cart.items[itemName] = {
            path: itemImagePath,
            price: itemPrice,
            quantity: 1
        }
    } else { // otherwise update quantity
        cart.items[itemName].quantity += 1
    }

    cart.total = calculateCartTotal(cart)
    setCart(cart)
    console.log(cart)
}

function addOne(itemName) {
    const cart = getCart();
    const item = cart.items[itemName]
    console.log('item', item)
    if(item) {
        if (item.quantity > 0) {
            item.quantity++
        }
    }
    cart.total = calculateCartTotal(cart)
    setCart(cart);
    
}

function onRemove(itemName) {
    const cart = getCart()
    const item = cart.items[itemName]
    console.log('item', item)
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1
        } else {
            delete cart.items[itemName]
        }
    }

    cart.total = calculateCartTotal(cart)
    setCart(cart)
}

function onList() {
    let cart = getCart();
    const keys = Object.keys(cart.items)
    const mappedCartItems = []

    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i]
        mappedCartItems.push({
            ...cart.items[key],
            name: key,
        })
    }

    return mappedCartItems;
}

function resetCartState () {
    window.localStorage.removeItem("cart");
    
}

function calculateCartTotal() {

    let cart = getCart();
    const itemKeys = Object.keys(cart.items)

    let subTotal = 0;
    let tax = .08;
    let shipping = 15;

    for (let i = 0; i < itemKeys.length; ++i) {
        const itemKey = itemKeys[i]
        const item = cart.items[itemKey]
        subTotal += Number(item.price) * Number(item.quantity)
    }
    if (subTotal == 0) {
        shipping = 0;
    }
    let taxAmmount = tax * subTotal;
    let total = subTotal + taxAmmount + shipping;
    return {subTotal, taxAmmount, shipping, total }
}

// Cart Rendering //



// export default{
//     
//     removeItemFromCart: onRemove,
//     getCart: getCart,
//     setCart: setCart,
//     calcCartTot: calculateCartTotal,
//     getCartItemsArr: onList
// }