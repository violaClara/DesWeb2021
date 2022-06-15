const links=document.querySelectorAll(".menuLi");
const sections=document.querySelectorAll(".thisSec");

function theMenu(){
    let leng=sections.length;
    while(--leng && window.scrollY +97<sections[leng].offsetTop){}
    links.forEach(ele=>ele.classList.remove("active"));
    links[leng].classList.add("active");
}
theMenu();
window.addEventListener("scroll",theMenu);