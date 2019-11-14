const mysitenav = document.querySelector('.site-header .site-nav');
const mymenubutton = document.querySelector('.menu-button');

mymenubutton.onclick = function () {
    console.log("clicked!");
    mysitenav.classList.toggle('active');
}
