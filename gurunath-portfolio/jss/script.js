/* Smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({ behavior:"smooth" });

});

});


/* Navbar shadow on scroll */

window.addEventListener("scroll", function(){

document.querySelector(".header")
.style.boxShadow = window.scrollY > 50
? "0 2px 15px rgba(0,0,0,0.2)"
: "0 2px 10px rgba(0,0,0,0.1)";

});