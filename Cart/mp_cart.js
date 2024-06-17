let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector(".closeShoping");  // Corrected typo
let list = document.querySelector('.list');
let listCard = document.querySelector('.card');  // Corrected typo
let body = document.querySelector('body');  // Corrected typo
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    listCard.classList.add('active');  // Corrected class name
});
closeShopping.addEventListener('click', () => {
    listCard.classList.remove('active');  // Corrected class name
});
