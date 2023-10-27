$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        infinity: true,
        prevArrow: "<img src='left.png' class='prev' alt='l'>",
        nextArrow: "<img src='right.png' class='next' alt='r'>",
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