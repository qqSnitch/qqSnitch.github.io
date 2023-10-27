/*global $ */
$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        infinity: true,
        nextArrow: "<img src='right.png' class='next' alt='r'>",
        prevArrow: "<img src='left.png' class='prev' alt='l'>",
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
