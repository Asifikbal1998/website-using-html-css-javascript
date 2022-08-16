
let burgur = document.querySelector('.burgur');
let navbar = document.querySelector('.navbar');
let leftnavbar = document.querySelector('.left_navbar');
let rightnavbar = document.querySelector('.right_navbar');


burgur.addEventListener('click', () => {
    leftnavbar.classList.toggle('visibility-res');
    rightnavbar.classList.toggle('visibility-res');
    navbar.classList.toggle('res-nav-h');
})

// function barger() {
//     let burgur = document.querySelector('.burgur');
//     let navbar = document.querySelector('.navbar');
//     let leftnavbar = document.querySelector('.left_navbar');
//     let rightnavbar = document.querySelector('.right_navbar');

//     leftnavbar.classList.toggle('visibility-res');
//     rightnavbar.classList.toggle('visibility-res');
//     navbar.classList.toggle('res-nav-h');
// }
