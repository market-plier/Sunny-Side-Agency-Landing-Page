let nav = document.getElementById('nav');
let burger = document.getElementById('hamburger');
let isOpened = false;
burger.addEventListener('click', ()=>{
    if (isOpened){
        nav.classList.remove('burger-opened')
        isOpened = false
    }
    else {
        nav.classList.add('burger-opened')
        isOpened = true
    }
})
