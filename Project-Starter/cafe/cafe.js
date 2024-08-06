$(document).ready(function () {

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
});

//to add cafe item to order list
document.addEventListener('DOMContentLoaded', function () {

    let items = []
    let total = 0;

    const orderList = document.getElementById('orderList');
    const orderTotal = document.getElementById('orderTotal');
    const menuList = document.getElementById('menuList');

    menuList.addEventListener('click', function (event) {

        if (event.target.tagName === 'IMG') {

            const name = event.target.getAttribute('item-name');
            const price = parseFloat(event.target.getAttribute('item-price'));

            items.push(`${name}: $${price.toFixed(2)}`);
            total += price;

            orderList.value = items.join('\n');
            orderTotal.textContent = `Total: $${total.toFixed(2)}`;
        }
    });

    //to have page go to checkout
    function placeOrder() {
        window.location.href = 'checkout.html';
    }

    $('#place_order').click(function () {
        placeOrder();
    });

    //to clear the order list
    function clearOrder() {
        items = [];
        total = 0;

        orderList.value = '';
        orderTotal.textContent = 'Total: $0.00';
    }

    $('#clear_order').click(function () {
        clearOrder();
    });
});