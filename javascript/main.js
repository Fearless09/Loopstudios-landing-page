const menuBtn = document.getElementById('hamburger') 
const menuOpen = document.getElementById('menuOpen') 
const menuClose = document.getElementById('menuClose') 

menuBtn.addEventListener("click", (e) => {
    menuClose.toggleAttribute('data-open')
    menuOpen.toggleAttribute('data-hidden')
})