$(document).ready(function(){
    $(".navbar-toggler").click(function () {
        $(".wrapper").toggleClass("move-to-right");
        $("body").toggleClass("fixed");
        $(".click-menu-btn").toggleClass("change-btn");
    });
    
    $(".close-navbar-toggler").click(function () {
        $(".wrapper").removeClass("move-to-right");
    });
});

$('.our-client-slider').slick({
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
});