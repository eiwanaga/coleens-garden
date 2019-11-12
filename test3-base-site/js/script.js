document.addEventListener('DOMContentLoaded', function () {


    console.log("ready!");

    // mobile menu 
    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-navigation.top-nav');
    var myUtilityNav = document.querySelector('.utility-nav');
    //console.log(myMainMenu);
    myMenuButton.addEventListener('click', function () {
        //console.log("I'm Clicked!")
        myMainMenu.classList.toggle('expanded');
        myUtilityNav.classList.toggle('expanded');
    });


    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        initialSlide: 0,
        //truewrapper adoptsheight of active slide
        autoHeight: false,
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // delay between transitions in ms
        autoplay: 5000,
        autoplayStopOnLast: false, // loop false also
        // If we need pagination
        pagination: '.swiper-pagination',
        paginationType: "bullets",

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // And if we need scrollbar
        //scrollbar: '.swiper-scrollbar',
        // "slide", "fade", "cube", "coverflow" or "flip"
        effect: 'slide',
        // Distance between slides in px.
        spaceBetween: 0,
        //
        slidesPerView: 2,
        //
        centeredSlides: true,
        //
        slidesOffsetBefore: 0,
        //
        grabCursor: true,
    })

});