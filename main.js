const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('dark-button');

    if(Document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','dark');
    }
});