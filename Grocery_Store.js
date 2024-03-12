// For Search Box
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');

searchBtn.addEventListener( 'click' ,() => {

    searchForm.classList.toggle('active')
//    When searchForm is active then others are removed.
    shoppingCart.classList.remove('active')
    formLogin.classList.remove('active')
    navbar.classList.remove('active')
});


// For Cart Box
const cartBtn = document.getElementById('cart-btn')
const shoppingCart = document.querySelector('.shopping-cart');

cartBtn.addEventListener( 'click' ,() => {
    
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    formLogin.classList.remove('active')
    navbar.classList.remove('active')

});


// For Login Form
const  loginBtn = document.querySelector('#login-btn')
const formLogin = document.querySelector('.login-form')

loginBtn.addEventListener('click', () => {
  
  formLogin.classList.toggle('active')
  searchForm.classList.remove('active')
  shoppingCart.classList.remove('active')
  navbar.classList.remove('active')

})

// For Responsive Menu Btn
const  menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

menuBtn.addEventListener('click', () => {

  navbar.classList.toggle('active')
  searchForm.classList.remove('active')
  shoppingCart.classList.remove('active')
  formLogin.classList.remove('active')

})

// window.onclick = () => {
//     // Here Order is important
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     formLogin.classList.remove('active')
//     navbar.classList.remove('active')
// }