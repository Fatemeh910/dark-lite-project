const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('dark-button');
})