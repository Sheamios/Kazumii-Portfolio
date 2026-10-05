
const reveal = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("visible");
    });
},{threshold:.12});
reveal.forEach(el=>observer.observe(el));

const bars=document.querySelectorAll(".progress-bar");
const skillObserver=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting) e.target.style.width=e.target.dataset.width;
    });
},{threshold:.5});
bars.forEach(b=>skillObserver.observe(b));

const menuButton=document.querySelector(".mobile-menu");
const navLinks=document.querySelector(".nav-links");
if(menuButton){
    menuButton.addEventListener("click",()=>navLinks.classList.toggle("open"));
}
document.querySelectorAll(".nav-links a").forEach(a=>{
    a.addEventListener("click",()=>navLinks.classList.remove("open"));
});

const terminalLines=document.querySelectorAll(".terminal-body > div");
terminalLines.forEach((line,i)=>{
    line.style.opacity="0";
    setTimeout(()=>{
        line.style.transition="opacity .4s ease";
        line.style.opacity="1";
    },500+i*450);
});
