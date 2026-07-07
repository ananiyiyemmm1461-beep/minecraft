// =========================
// ÇINAR SURVIVAL STORE
// Premium Script
// =========================

// IP Kopyalama

function copyIP(){

navigator.clipboard.writeText("cinarsurvival.ok.redstone.tr");

alert("✔ IP Kopyalandı!\n\ncinarsurvival.ok.redstone.tr");

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar Scroll

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.padding="12px 8%";
nav.style.background="rgba(0,0,0,.85)";

}else{

nav.style.padding="18px 8%";
nav.style.background="rgba(0,0,0,.55)";

}

});

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.vip-card,.box").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(70px)";

el.style.transition=".8s";

observer.observe(el);

});

// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="350px";
glow.style.height="350px";
glow.style.background="radial-gradient(circle,#32CD3230,transparent 70%)";
glow.style.pointerEvents="none";
glow.style.borderRadius="50%";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// 3D Tilt

document.querySelectorAll(".vip-card,.box").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rx=-(y-rect.height/2)/18;

const ry=(x-rect.width/2)/18;

card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});

// Typing Effect

const title=document.querySelector(".hero h1");

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();

// Floating Background

for(let i=0;i<40;i++){

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.width=Math.random()*6+2+"px";

dot.style.height=dot.style.width;

dot.style.background="#32CD32";

dot.style.opacity=".2";

dot.style.borderRadius="50%";

dot.style.left=Math.random()*100+"vw";

dot.style.top=Math.random()*100+"vh";

dot.style.animation=`float ${Math.random()*10+8}s linear infinite`;

document.body.appendChild(dot);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(0);

}

100%{

transform:translateY(-120vh);

}

}

`;

document.head.appendChild(style);

// Console

console.log("%cÇınar Survival","font-size:30px;color:#32CD32;font-weight:bold;");
console.log("%cWebsite by ChatGPT","color:white;");
// =====================================
// PREMIUM EFFECTS PART 2
// =====================================

// Sayfa Yüklenme Efekti
window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";
document.body.style.opacity="1";

},100);

});

// Yukarı Çık Butonu

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="topBtn";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";
topBtn.style.pointerEvents="all";

}else{

topBtn.style.opacity="0";
topBtn.style.pointerEvents="none";

}

});

// CSS

const style2=document.createElement("style");

style2.innerHTML=`

.topBtn{

position:fixed;

bottom:30px;

right:30px;

width:60px;

height:60px;

border:none;

border-radius:50%;

background:#32CD32;

color:white;

font-size:24px;

cursor:pointer;

box-shadow:0 0 25px #32CD32;

transition:.35s;

opacity:0;

pointer-events:none;

z-index:99999;

}

.topBtn:hover{

transform:scale(1.15);

box-shadow:0 0 45px #32CD32;

}

`;

document.head.appendChild(style2);

// Buton Efekti

document.querySelectorAll(".buy,.btn,.discord-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Kart Parlama

document.querySelectorAll(".vip-card,.box").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=`
radial-gradient(circle at ${x}px ${y}px,
rgba(50,205,50,.28),
rgba(20,20,20,.92) 70%)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});

// Başlık Dalgalanma

setInterval(()=>{

document.querySelector(".hero h1").style.textShadow=

`0 0 ${Math.random()*35+15}px #32CD32`;

},400);

// Footer Yılı

const footer=document.querySelector("footer");

footer.innerHTML="© "+new Date().getFullYear()+" Çınar Survival | Tüm Hakları Saklıdır.";

// Rastgele Neon

setInterval(()=>{

document.querySelectorAll(".box,.vip-card").forEach(el=>{

el.style.boxShadow=

`0 0 ${Math.random()*25+15}px rgba(50,205,50,.35)`;

});

},2000);