const burgerBtn = document.querySelector('.burger-icon')
const hiddenMenu = document.querySelector('.hidden-menu')
const closeBtn = document.querySelector('.close-menu')

const showMenu = () => {
    hiddenMenu.style.transform = 'translateX(0)'
}

const closeMenu = () => {
    hiddenMenu.style.transform = 'translateX(100%)'
}


burgerBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)