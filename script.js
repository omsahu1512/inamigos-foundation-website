/* ==========================================
   InAmigos Foundation
   script.js
========================================== */

// ==========================
// Sticky Navbar
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    if(counterStarted) return;

    const impact = document.querySelector(".impact");

    const impactTop = impact.getBoundingClientRect().top;

    if(impactTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = +counter.dataset.target;

            let count = 0;

            const increment = target / 150;

            function updateCounter(){

                count += increment;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target.toLocaleString() + "+";

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);


// ==========================
// Scroll Reveal Animation
// ==========================

const reveals = document.querySelectorAll(

".about,.mission-box,.founder,.counter-box,.why-card,.volunteer,.project-card,.gallery-grid img,.testimonial-card,.contact,.cta"

);

function revealElements(){

    reveals.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        const visible = 120;

        if(top < window.innerHeight - visible){

            element.classList.add("active","reveal");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();


// ==========================
// Contact Form Validation
// ==========================

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const subject=document.getElementById("subject").value.trim();

const message=document.getElementById("message").value.trim();

if(name===""||email===""||subject===""||message===""){

alert("Please fill all fields.");

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){

alert("Please enter a valid email.");

return;

}

alert("Thank you for contacting InAmigos Foundation! We will get back to you soon.");

form.reset();

});

}


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ==========================
// Active Navigation
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Project Card Hover Glow
// ==========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(20,184,166,.15),
white 55%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#fff";

});

});


// ==========================
// Gallery Click Animation
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

img.style.transform="scale(1.12)";

setTimeout(()=>{

img.style.transform="scale(1)";

},250);

});

});


// ==========================
// Hero Button Ripple Effect
// ==========================

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// ==========================
// Loading Animation
// ==========================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});


console.log("InAmigos Foundation Website Loaded Successfully!");