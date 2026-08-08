// ===========================
// BrandX Professional Script
// ===========================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===========================
// Sticky Navbar
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "14px 7%";
        navbar.style.background = "rgba(8,17,31,.90)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.padding = "18px 7%";
        navbar.style.background = "rgba(8,17,31,.55)";
        navbar.style.boxShadow = "none";

    }

});

// ===========================
// Reveal Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("fade-up");

    observer.observe(sec);

});

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target/120;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(c=>counterObserver.observe(c));

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll("a[href^='#']").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// Back To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.left="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="24px";
topBtn.style.background="#ff8800";
topBtn.style.color="white";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Card Hover Effect
// ===========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgb(161, 65, 0),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});

// ===========================
// Active Menu On Scroll
// ===========================

const sections=document.querySelectorAll("section");

const nav=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=sec.offsetTop-120;

if(pageYOffset>=top){

current=sec.getAttribute("id");

}

});

nav.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===========================
// Preloader
// ===========================

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.style.position="fixed";
loader.style.inset="0";
loader.style.background="#4e2a00";
loader.style.zIndex="9999";
loader.style.display="flex";
loader.style.justifyContent="center";
loader.style.alignItems="center";
loader.innerHTML="<h1 style='color:white'>Tehran Tiger</h1>";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.opacity="0";

loader.style.transition=".8s";

setTimeout(()=>{

loader.remove();

},800);

},500);

});

const filters=document.querySelectorAll(".filter");

const projects=document.querySelectorAll(".project");

filters.forEach(btn=>{

btn.onclick=()=>{

filters.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const value=btn.dataset.filter;

projects.forEach(card=>{

if(value==="all"){

card.style.display="block";

}else{

card.style.display=

card.classList.contains(value)

?

"block"

:

"none";

}

});

}

}); brandx