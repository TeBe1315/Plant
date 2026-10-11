const btnBars = document.querySelector('.menu')
const menuNav = document.querySelector('.menuNav')

btnBars.addEventListener('click', () =>{
    menuNav.classList.toggle('showMenu')
})