$(document).ready(function(){

    //for preload images to browser
    const preloadImages= [
        "images/espresso_info.jpg",
        "images/latte_info.jpg",
        "images/cappuccino_info.jpg",
        "images/coffee_info.jpg",
        "images/biscotti_info.jpg",
        "images/scone_info.jpg"
    ];

    $.each(preloadImages,function (index,src) {
        $('<img/>').attr('src',src);
    });
    //to add rollover images effect
    $("ul li img").hover(
        function() {
            const infoImageSrc = $(this).attr("id");
            const originalSrc= $ (this).attr("src");
            $(this).data("original-src",originalSrc);
            $(this).attr("src", infoImageSrc);
        },
        function(){
            const originalSrc=$(this).data("original-src");
            $(this).attr("src" , originalSrc);
        }
        );
});