const slider=()=>{const e=document.querySelector(".slider"),t=e.querySelectorAll(".slide"),l=document.querySelector(".slider-controller.next"),r=document.querySelector(".slider-controller.prev");let c=0;const n=t[0].offsetWidth;let o;const s=()=>{o=setInterval(i,4e3)},d=()=>{clearInterval(o),s()},i=()=>{c=(c+1)%t.length,e.scrollLeft=c*n,d()};s(),l.addEventListener("click",i),r.addEventListener("click",(()=>{c=(c-1+t.length)%t.length,e.scrollLeft=c*n,d()}))};
const menu=()=>{let e=document.querySelector(".menu-icon");e.onclick=()=>{let e=document.querySelector(".menu");e.classList.toggle("active")};let c=document.querySelector(".close-menu");c.onclick=()=>{let e=document.querySelector(".menu");e.classList.remove("active")}
window.addEventListener('scroll', function () {let e=document.querySelector(".menu");e.classList.remove("active");});};
let bfo = false;
const blackFridayBanner=()=>{let $=document.querySelector(".black-friday-banner");$.classList.toggle("minimized");$.onclick=()=>{$.classList.toggle("minimized")};let e=document.querySelector(".black-friday-banner .timer"),r=new Date("2024-12-20").getTime(),n=()=>{let $=new Date().getTime(),n=r-$,l=Math.floor(n/864e5),i=Math.floor(n%864e5/36e5),o=Math.floor(n%36e5/6e4),t=Math.floor(n%6e4/1e3);return l>0||i>0?e.innerHTML=`${l}d ${i}h`:e.innerHTML=`${o}d ${t}h`};n(),setInterval(n,1e3); };
window.onload=()=>{slider();menu();blackFridayBanner();
    window.addEventListener('scroll', function () {
        console.log(window.scrollY);
        if(window.scrollY > 400 && !bfo){
            let $=document.querySelector(".black-friday-banner");$.classList.add("minimized")
            bfo = true;
        }
    })
};
