const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

burger.addEventListener('click', event => {

    if (burger.classList.contains('show')) {
        burger.classList.remove('show');
        nav.classList.remove('show');
    }   else {
        burger.classList.add('show');
        nav.classList.add('show');
        
    }

})
