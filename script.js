/* Scroll progress bar */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.querySelector(".scroll-bar").style.width=progress+"%";

});


/* typing effect */

const text="Petroleum Engineering Student";

let i=0;

function type(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();


/* skill animation */

const skills=document.querySelectorAll(".skill-fill");

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let width=entry.target.getAttribute("data-width");

entry.target.style.width=width+"%";

}

});

});

skills.forEach(skill=>skillObserver.observe(skill));


/* timeline animation */

const items=document.querySelectorAll(".timeline-item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

items.forEach(item=>observer.observe(item));
