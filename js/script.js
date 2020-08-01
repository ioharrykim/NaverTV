// alert("로드");

let hamMenu = document.querySelector(".ham-menu");
let ham = document.querySelectorAll(".ham");
let hamMenuOpen = document.querySelector(".ham-menu-open");
let hamLi = document.querySelectorAll(".hamli");
let localNav = document.querySelector(".local-nav");
ham = Array.prototype.slice.call(ham);
hamLi = Array.prototype.slice.call(hamLi);

let toggle = true;

function onClickHam(e){
    if(toggle){
        ham[0].style.transform = "translateY(12px) rotateZ(45deg)";
        ham[1].style.opacity = "0";
        ham[2].style.transform = "translateY(-12px) rotateZ(-45deg)";
        localNav.style.height = "100vh";
    }
    else if(!toggle){
        ham[0].style.transform = "translateY(0) rotateZ(0)";
        ham[1].style.opacity = "1";
        ham[2].style.transform = "translateY(0) rotateZ(0)";
        localNav.style.height = "100px";
    }
    toggle = !toggle;
}

hamMenu.addEventListener("click", onClickHam);