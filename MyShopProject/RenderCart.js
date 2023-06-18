// import {
//     removeItemFromCart,
//     getCartItemsArr
// } from "./cartListeners.js"


window.onload = renderCart; 

function renderCart() {
    clearCart();
    createTableHead();
    let cartItems = onList();
    console.log(cartItems)
    //Create a new Table row using the retuned value stored in cartItems

    for (let i = 0; i < cartItems.length; i++ ) {
        const item = cartItems[i]
        createCartItem(item.path, item.name, item.quantity, item.price);
    }
    updateCartTotal();
}

function createCartItem (imgPath, iName, itemQuantity, itemPrice) {

    let newCartItemRow = document.createElement("tr");
        let newRowData = document.createElement("td");
        newRowData.classList.add("cart-info");
            let itemImg = document.createElement("img");
            itemImg.src = imgPath;
            let itemInfoWrapper = document.createElement("div");
            itemInfoWrapper.classList.add("cart-des");
                let itemName = document.createElement("p");
                itemName.classList.add("itemName")
                //Make sure return type matches createElement
                itemName.innerHTML = iName;
                let remButton = document.createElement("button");
                remButton.classList.add("btn-remove");
                remButton.innerHTML = "Remove";
                let addButton = document.createElement("button");
                addButton.classList.add("btn-remove");
                addButton.innerHTML = "Add";

                //Make sure iName is actaully being passed the correct format used in addItem
                remButton.onclick= function() {
                    onRemove(iName);
                    renderCart();
                };

                addButton.onclick= function() {
                    addOne(iName);
                    renderCart();
                }
        let itemQuantityEl = document.createElement("td");
        itemQuantityEl.innerHTML = itemQuantity;
        let itemPriceEl = document.createElement('td');
        itemPriceEl.innerHTML = "$" + itemPrice + ".00";


    let tableElement = document.getElementById("cart");
    tableElement.appendChild(newCartItemRow);
    newCartItemRow.appendChild(newRowData);
    newRowData.appendChild(itemImg);
    newRowData.appendChild(itemInfoWrapper);
    itemInfoWrapper.appendChild(itemName);
    itemInfoWrapper.appendChild(remButton);
    itemInfoWrapper.appendChild(addButton);
    newCartItemRow.appendChild(itemQuantityEl);
    newCartItemRow.appendChild(itemPriceEl);


}

function clearCart () {
    let element = document.getElementById("cart")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function checkout () {
    resetCartState();
    renderCart();
}

function createTableHead () {
    let tableCart = document.getElementById('cart');
    let tableHeader = document.createElement("tr");
        let productHeader = document.createElement('th');
        productHeader.innerHTML = "Product";
        let quantityHeader = document.createElement('th');
        quantityHeader.innerHTML = "Quantity";
        let priceHeader = document.createElement('th');
        priceHeader.innerHTML = "Price";
    tableCart.appendChild(tableHeader);
    tableHeader.appendChild(productHeader);
    tableHeader.appendChild(quantityHeader);
    tableHeader.appendChild(priceHeader);
    console.log(tableCart);
}

function updateCartTotal () {
    let cartSummmary = calculateCartTotal();
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        //per Stack overflow https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
      });
    let subTotal = document.getElementById("subTotal");
    subTotal.innerHTML = formatter.format(cartSummmary.subTotal);
    let tax = document.getElementById('tax');
    tax.innerHTML = formatter.format(cartSummmary.taxAmmount);
    let shipping = document.getElementById('shipping');
    shipping.innerHTML = formatter.format(cartSummmary.shipping);
    let total = document.getElementById("total");
    total.innerHTML = formatter.format(cartSummmary.total);

    
}
