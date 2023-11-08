const menu = document.querySelector(".barra_principal");
const openMenuBtn = document.querySelector(".open_menu");
const closeMenuBtn = document.querySelector(".close_menu");
  
function toggleMenu() {
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);

closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click",function(){
        menu.classList.remove("menu_opened");
    })
});


function showPanel(){
    const panel= document.getElementById("panelPowerBI")
    panel.style.display= "block";
    const arcgis= document.getElementById("viewDiv")
    arcgis.style.display= "none";
}