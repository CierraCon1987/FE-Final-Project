"use strict";

$(document).ready(() => {
    // Cafe Item Info
    const items = {
        Espresso: { name: 'Espresso', price: 3.00},
        Latte: { name: 'Latte', price: 3.50},
        Cappuccino: { name: 'Cappuccino', price: 3.45},
        Coffee: { name: 'Coffee', price: 2.50},
        Biscotti: { name: 'Biscotti', price: 3.25},
        Scone: { name: 'Scone', price: 2.95}
    };

    // User click - adds item to menu
    let total = 0;

    function addItem(name, price) {
        const orderList = document.getElementById('order');
        const listItem = document.createElement('li'); //show items as list
        listItem.textContent = '${name} - $${price.toFixed(2)}';
        orderList.appendChild(listItem);

        total += price;
        document.getElementById('totalAmount').textContent = total.toFixed(2);
    }

    // Place Order to Check Out 
    function placeOrder() {
        window.location.href = "checkout.html";
    }
})