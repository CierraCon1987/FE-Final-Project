//Local Storage Info
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = key => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

const removeLocalStorage = key => {
    localStorage.removeItem(key);
};

$(document).ready(() => {

    //for preload images to browser
    const preloadImages = [
        "images/espresso_info.jpg",
        "images/latte_info.jpg",
        "images/cappuccino_info.jpg",
        "images/coffee_info.jpg",
        "images/biscotti_info.jpg",
        "images/scone_info.jpg"
    ];

    $.each(preloadImages, function (index, src) {
        $('<img/>').attr('src', src);
    });


    //to add rollover images effect
    $("ul li img").hover(
        function () {
            const infoImageSrc = $(this).attr("id");
            const originalSrc = $(this).attr("src");
            $(this).data("original-src", originalSrc);
            $(this).attr("src", infoImageSrc);
        },
        function () {
            const originalSrc = $(this).data("original-src");
            $(this).attr("src", originalSrc);
        }
    );

    //Add cafe item to Order
    /*$("#add_order").click(() => {
        const textbox = $("#order");
        const order = textbox.val();
        if (order === "") {
            alert("Please use the images above to create your order!");
            textbox.focus();
        } else {
            let currentOrder = getCookieByName("order");
            currentOrder = currentOrder.concat(order, "\n");
            updateOrderCookie(currentOrder);

            textbox.val("");
            $("#order_list").val(getCookieByName("order"));
            textbox.focus();
        }
    });

//to add cafe item to order list
/*document.addEventListener('DOMContentLoaded', function () {*/

    let items = getLocalStorage('order') || [];
    let total = getLocalStorage('total') || 0;

    const orderList = document.getElementById('orderList');
    const orderTotal = document.getElementById('orderTotal');
    const menuList = document.getElementById('menuList');

    //display saved order - local storage

    if (items.length > 0) {
        orderList.value = items.join('\n');
        orderTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    menuList.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {

            const name = event.target.getAttribute('item-name');
            const price = parseFloat(event.target.getAttribute('item-price'));

            items.push(`${name}: $${price.toFixed(2)}`);
            total += price;

            orderList.value = items.join('\n');
            orderTotal.textContent = `Total: $${total.toFixed(2)}`;

            setLocalStorage('order', items);
            setLocalStorage('total', total);
        }
    });

    //to clear the order list and total
    $('#clear_order').click(function () {
        items = [];
        total = 0;

        orderList.value = '';
        orderTotal.textContent = 'Total: $0.00';

        removeLocalStorage('order');
        removeLocalStorage('total');
    });

    //Place Order 
    $('#place_order').click(function () {
        window.location.href = 'checkout.html';
    }); /* jquery part */
}); 