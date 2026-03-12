const text = "Petroleum Engineer | Machine Learning Enthusiast | Energy Professional"

let i = 0

function typing(){

document.querySelector(".typing").textContent = text.slice(0,i++)

if(i <= text.length){
setTimeout(typing,60)
}

}

typing()



const skills = document.querySelectorAll(".skill-fill")

function animateSkills(){

skills.forEach(skill=>{

const width = skill.getAttribute("data-width")

skill.style.width = width + "%"

})

}

window.addEventListener("scroll",animateSkills)



const counters = document.querySelectorAll(".counter")

counters.forEach(counter=>{

const update = () =>{

const target = +counter.getAttribute("data-target")

const count = +counter.innerText

const speed = target / 100

if(count < target){

counter.innerText = Math.ceil(count + speed)

setTimeout(update,20)

}

}

update()

})



const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top

if(top < window.innerHeight - 100){

el.style.opacity=1
el.style.transform="translateY(0)"

}

})

})



document.getElementById("darkToggle").onclick = ()=>{

document.body.classList.toggle("light")

}
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
timelineObserver.unobserve(entry.target);
}
});
},{
threshold:0.2
});

timelineItems.forEach(item=>{
timelineObserver.observe(item);
});
