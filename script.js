
/* ================= MOBILE MENU ================= */


const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


if(menu){

    menu.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



/* CLOSE MENU AFTER CLICK */


const navLinks = document.querySelectorAll("nav ul li a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});



/* ================= SCROLL ANIMATION ================= */


const revealElements = document.querySelectorAll(
".card, .product, .home-about, .stats div, .review-box"
);



function reveal(){

    revealElements.forEach(element=>{

        let windowHeight = window.innerHeight;

        let elementTop = element.getBoundingClientRect().top;

        let visiblePoint = 100;


        if(elementTop < windowHeight - visiblePoint){

            element.classList.add("show");

        }


    });

}


window.addEventListener("scroll",reveal);


reveal();



/* ================= CURRENT YEAR FOOTER ================= */


let year = document.querySelector(".copy");


if(year){

    year.innerHTML =
    "© "+ new Date().getFullYear() +" Scentura. All Rights Reserved.";

}



/* ================= IMAGE LOADING EFFECT ================= */


const images = document.querySelectorAll("img");


images.forEach(img=>{

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});



/* ================= BUTTON CLICK EFFECT ================= */


const buttons=document.querySelectorAll("a");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(0.95)";


        setTimeout(()=>{

            button.style.transform="";

        },150);


    });


});



/* ================= BACK TO TOP ================= */


const topButton=document.createElement("button");


topButton.innerHTML="↑";


topButton.className="top-btn";


document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }


});



topButton.addEventListener("click",()=>{


    window.scrollTo({

        top:0,
        behavior:"smooth"

    });


});
