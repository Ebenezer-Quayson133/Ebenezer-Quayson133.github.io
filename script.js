/* Scroll progress */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.querySelector(".scroll-bar").style.width=progress+"%";

});


/* typing animation */

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


/* skill bars */

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


/* about animation */

const about=document.querySelectorAll(".about-content p");

const aboutObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

about.forEach(p=>aboutObserver.observe(p));


/* back to top */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

});

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"});
};
