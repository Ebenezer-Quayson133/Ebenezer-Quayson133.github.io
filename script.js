/* Scroll Progress */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;
let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.querySelector(".scroll-progress").style.width=progress+"%";

});


/* Typing Animation */

const text="Petroleum Engineering Student | Marchine Learning Enthusiats| Aspiring Energy Professional";

let i=0;

function type(){

if(i<text.length){

document.querySelector(".typing").innerHTML+=text.charAt(i);
i++;

setTimeout(type,70);

}

}

type();


/* Skill Bars */

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


/* Timeline Animation */

const items=document.querySelectorAll(".timeline-item");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

items.forEach(item=>observer.observe(item));


/* About paragraph animation */

const aboutText=document.querySelectorAll(".about-content p");

const aboutObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

aboutText.forEach(p=>aboutObserver.observe(p));


/* Achievement Counters */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}

};

update();

});
