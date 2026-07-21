// =======================================
// ÇINAR SURVIVAL STORE
// SCRIPT.JS
// =======================================

// IP Kopyalama
function copyIP(){
    const ip="cinarsurvival.ok.redstone.tr";
    navigator.clipboard.writeText(ip);
    alert("🎮 IP Kopyalandı!\n\n"+ip);
}

// IBAN Kopyalama
function copyIBAN(){
    const iban="TR54 0082 9000 0949 1357 6973 16";
    navigator.clipboard.writeText(iban);
    alert("🏦 IBAN Kopyalandı.");
}

// Navbar Scroll Efekti
window.addEventListener("scroll",()=>{
    const nav=document.querySelector("nav");
    if(window.scrollY>40){
        nav.style.background="rgba(0,0,0,.9)";
        nav.style.padding="15px 8%";
    }else{
        nav.style.background="rgba(0,0,0,.75)";
        nav.style.padding="20px 8%";
    }
});

// Fade Animasyonu
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";
        }
    });
});

document.querySelectorAll("section,.vip-card,.payment-card,.info-card,.faq-box").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(70px)";
    el.style.transition=".8s";
    observer.observe(el);
});

// Hero Yazısı
const hero=document.querySelector(".hero h1");
const text=hero.innerText;
hero.innerHTML="";
let i=0;

function type(){
    if(i<text.length){
        hero.innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,80);
    }
}
type();

// Mouse Glow
const glow=document.createElement("div");
glow.style.position="fixed";
glow.style.width="350px";
glow.style.height="350px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,#32CD3230,transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";
document.body.appendChild(glow);

window.addEventListener("mousemove",e=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
});

// Yukarı Çık Butonu
const topBtn=document.createElement("button");
topBtn.innerHTML="⬆";
topBtn.className="topButton";
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
    }else{
        topBtn.style.opacity="0";
    }
});

// CSS
const style=document.createElement("style");
style.innerHTML=`
.topButton{
    position:fixed;
    bottom:30px;
    right:30px;
    width:60px;
    height:60px;
    border:none;
    border-radius:50%;
    background:#32CD32;
    color:white;
    font-size:25px;
    cursor:pointer;
    opacity:0;
    transition:.35s;
    box-shadow:0 0 30px #32CD32;
    z-index:99999;
}
.topButton:hover{
    transform:scale(1.15);
}
`;
document.head.appendChild(style);

// Online Sayısı (mcstatus.io API)
fetch("https://mcstatus.io")
.then(res=>res.json())
.then(data=>{
    if(data.online){
        document.getElementById("online").innerText=data.players.online;
        const player=document.getElementById("playercount");
        if(player){
            player.innerText=data.players.online+" Oyuncu";
        }
    }else{
        document.getElementById("online").innerText="0";
        const player=document.getElementById("playercount");
        if(player){
            player.innerText="Sunucu Kapalı";
        }
    }
})
.catch(()=> {
    document.getElementById("online").innerText="?";
    const player=document.getElementById("playercount");
    if(player){
        player.innerText="Veri Alınamadı";
    }
});

// Konsol Mesajı
console.log("%cÇınar Survival","font-size:35px;color:#32CD32;font-weight:bold;");
console.log("%cWebsite Developed","color:white;");
