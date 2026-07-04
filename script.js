// JavaScript will be added in Part 2
console.log("Portfolio Loaded Successfully");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background="rgba(15,23,42,.95)";
header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(255,255,255,.08)";
header.style.boxShadow="none";

}

});
const words = [
"Frontend Developer",
"Web Designer",
"HTML Developer",
"CSS Expert",
"JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

let current = words[wordIndex];

if(!isDeleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

isDeleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

isDeleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,isDeleting?60:120);

}

typeEffect();
const progress = document.querySelectorAll(".progress");

window.addEventListener("scroll",()=>{

progress.forEach(bar=>{

bar.style.width=bar.classList.contains("html")?"95%":
bar.classList.contains("css")?"90%":
bar.classList.contains("js")?"75%":"90%";

});

});
const reveal=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveal.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.style.opacity="1";
sec.style.transform="translateY(0)";

}

});

});
const counters=document.querySelectorAll(".count");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=`${Math.ceil(count+increment)}`;

setTimeout(updateCounter,20);

}

else{

counter.innerText=target;

}

}

updateCounter();

});
/* ===========================
        LOADER
=========================== */

window.addEventListener("load",function(){

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

loader.style.transition="0.2s";

},1500);

});
/* ======================
    MOBILE MENU
====================== */

const menuBtn=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

if(navbar.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});
/*=========================
      DARK / LIGHT MODE
==========================*/

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

const icon = themeToggle.querySelector("i");

if(document.body.classList.contains("light-mode")){

icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");

}else{

icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");

}

});
/* Save Theme */

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light-mode");

themeToggle.innerHTML='<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click",()=>{

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

}else{

localStorage.setItem("theme","dark");

}

});
/*==========================
    PROGRESS BAR
==========================*/

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});
/*==========================
     TOP BUTTON
==========================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

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
const filterBtns=document.querySelectorAll(".filter-buttons button");
const cards=document.querySelectorAll(".project-card");

filterBtns.forEach(btn=>{

btn.onclick=()=>{

filterBtns.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

const filter=btn.dataset.filter;

cards.forEach(card=>{

if(filter==="all"||card.classList.contains(filter)){
card.classList.remove("hide");
}else{
card.classList.add("hide");
}

});

};

});
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const close=document.getElementById("close");

document.querySelectorAll(".project-card img").forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

};

});

close.onclick=()=>lightbox.style.display="none";

lightbox.onclick=e=>{
if(e.target===lightbox){
lightbox.style.display="none";
}
};

document.addEventListener("keydown",e=>{
if(e.key==="Escape"){
lightbox.style.display="none";
}
});
const modal=document.getElementById("projectModal");

document.querySelectorAll(".details-btn").forEach(btn=>{

btn.onclick=()=>{

modal.style.display="flex";

modalTitle.textContent=btn.dataset.title;
modalDesc.textContent=btn.dataset.desc;

liveBtn.href=btn.dataset.live;
githubBtn.href=btn.dataset.github;

};

});

modalClose.onclick=()=>modal.style.display="none";

window.onclick=e=>{
if(e.target==modal){
modal.style.display="none";
}
};
const testimonials=document.querySelectorAll(".testimonial");

let current=0;

setInterval(()=>{

testimonials[current].classList.remove("active");

current=(current+1)%testimonials.length;

testimonials[current].classList.add("active");

},3000);
document.querySelectorAll(".circle").forEach(circle=>{

let percent=circle.dataset.percent;

circle.style.background=
`conic-gradient(#38bdf8 ${percent*3.6}deg,#334155 0deg)`;

});
const certModal=document.getElementById("certModal");
const certPreview=document.getElementById("certPreview");

document.querySelectorAll(".cert-img").forEach(img=>{

img.onclick=()=>{

certModal.style.display="flex";

certPreview.src=img.src;

};

});

certClose.onclick=()=>certModal.style.display="none";

certModal.onclick=e=>{

if(e.target===certModal){

certModal.style.display="none";

}

};
const search=document.getElementById("searchProject");

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

cards.forEach(card=>{

let title=card.querySelector("h3").textContent.toLowerCase();

card.style.display=title.includes(value)?"block":"none";

});

});
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
