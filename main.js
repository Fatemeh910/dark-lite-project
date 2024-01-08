const themeButton = document.querySelector(".theme-button");
    window.addEventListener('DOMContentLoaded',() => {
        if(localStorage.getItem('theme') === "dark"){
          document.body.classList.add("dark-theme");
          themeButton.classList.add("dark-button");
        }else{
            document.body.classList.remove("dark-theme");
            themeButton.classList.remove("dark-button");
        }
    });




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
};