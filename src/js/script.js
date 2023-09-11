const imgs = document.getElementById("img-foto");
const imgFoto = document.querySelectorAll("#img-foto img");

const carousel = document.querySelector(".noticias")
const setaVoltar = document.getElementById("left");
const setaAvancar = document.getElementById("right");

arrowIcons = document.querySelectorAll('.carrossel-noticia i')
firstImg = carousel.querySelectorAll('img')[0];

let imagemAtual=0;
let firstImgWidth = firstImg.clientWidth + 20;
let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging')
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);


function carrosselFotos() {
    let tamanho = 0;

    function carrossel() {
        tamanho++;

        if (tamanho > imgFoto.length - 1) {
            tamanho = 0;
        }

        imgs.style.transform = `translateX(${-tamanho * 80}rem)`;
    }

    setInterval(carrossel, 2300);
}

carrosselFotos();


arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

setaAvancar.addEventListener("click", function () {
    if (imagemAtual === imagemAtual <= firstImg) {
        return;
    }

    imagemAtual++;

    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener("click", function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;
    
    mostrarOuEsconderSetas();
});


function mostrarOuEsconderSetas() {
    const naoEaPrimeiraImagem = imagemAtual !== 0;
    if (naoEaPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 &&
        imagemAtual === imagemAtual <= firstImg;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}

