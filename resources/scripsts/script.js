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

// script volver arriba

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

document.getElementById("scrollBtn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
