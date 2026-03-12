/* Scroll Progress Bar */
window.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  let progress=(scrollTop/height)*100;
  document.querySelector(".scroll-bar").style.width=progress+"%";
});

/* Typing Animation */
const text="Petroleum Engineering Student | Machine Learning Enthusiast | Aspiring Energy Professional";
let i=0;
function type(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,70);
  }
}
type();

/* Skill Bars Animation */
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

/* Scroll-triggered animations for About, Timeline, Achievements */
const animateElements=document.querySelectorAll(".about-content p, .timeline-item, .card");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});
animateElements.forEach(el=>observer.observe(el));

/* Back to Top Button */
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  if(window.scrollY>400) topBtn.style.display="block";
  else topBtn.style.display="none";
});
topBtn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"});}

