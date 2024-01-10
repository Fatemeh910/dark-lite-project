const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", ()=>  {
    document.body.classList.toggle("dark-theme");
    themeButton.classList.toggle("dark-button");

    saveThemeToLocaLStorage();
});

// مااخرین وضعیت تم راتوی لوکال  استوریج ذخیره کردیم
const saveThemeToLocaLStorage = () =>{
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
};
//اپدیت تم زمانی کهد سایت لود میشود

const updateTheme = () => {
    if (LocalStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-theme");
        themeButton.classList.add("dark-button");
      } else {
          document.body.classList.remove("dark-theme");
          themeButton.classList.remove("dark-button");
      }
};
window.addEventListener("DOMContentLoaded",updateTheme);