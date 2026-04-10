function kediTikla() {
    document.getElementById("kedi").style.display = "none"; // KEDİ GİDER
    document.getElementById("yazi").style.display = "none"; 
    document.getElementById("zarf").style.display = "block";
}

function zarfAc() {
    document.getElementById("zarf").style.display = "none"; // ZARF GİDER
    document.getElementById("mektup").style.display = "block";
}

function mektupKapat() {
    let m = document.getElementById("mektup");
    m.classList.toggle("kucul"); // küçül / büyü efekti
}

function hayir() {
    document.getElementById("hayir").style.display = "none";
}

function evet() {
    kalpBaslat();
}

// ❤️ SADECE EVETE BASINCA
function kalpBaslat() {
    setInterval(() => {
        let kalp = document.createElement("div");
        kalp.classList.add("kalp");
        kalp.innerHTML = "❤️";

        kalp.style.position = "fixed";
        kalp.style.left = Math.random() * window.innerWidth + "px";
        kalp.style.bottom = "20px";

        document.body.appendChild(kalp);

        let yukari = setInterval(() => {
            kalp.style.bottom = (parseInt(kalp.style.bottom) + 5) + "px";
        }, 30);
        
        setTimeout(() => {
            clearInterval(yukari);
            kalp.remove();
        }, 3000);

    }, 300);
}