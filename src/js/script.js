const imgs = document.getElementById("img-foto");
const imgFoto = document.querySelectorAll("#img-foto img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx>imgFoto.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 60}rem)`;
}

setInterval(carrossel, 2300);