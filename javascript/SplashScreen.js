var splashScreen = document.querySelector('.splash-screen');
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout (()=>{
        splashScreen.classList.add('hidden')
    },610)
})