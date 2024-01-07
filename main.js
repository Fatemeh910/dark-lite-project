const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle('dark-button');

    saveThemeToLocaLStorage();
});
// مااخرین وضعیت تم راتوی لوکال  استوریج ذخیره کردیم
const saveThemeToLocaLStorage = () =>{
    if(Document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme','light');
    }
}