const videoOverlay = document.getElementById('videoOverlay');
const video = document.getElementById('video');
const videoContainer = document.getElementById('videoContainer');
const navbar = document.getElementById('navbar');
const cardOverlay = document.getElementById('cardOverlay');
const titleProduct = document.getElementById('titleProduct');
const cerrarCardOverlay = document.getElementById('cerrarCardOverlay');
const textProduct = document.getElementById('textProduct');
const videoOverlayEnd = document.getElementById('videoOverlayEnd');
const messageEnd = document.getElementById('messageEnd');
const contentEnd = document.getElementById('contentEnd');
const productImg = document.getElementById('productImg');
const products = [
    {
        'name': 'Gorra futurista',
        'message': 'Lleva la gorra de la película, ¡es unica!',
        'price': 100,
        'start': 2,
        'end': 16,
        'found': false,
        'image': './assets/images/gorra.webp'

    },
    {
        'name': 'Super tabla',
        'message': 'La replica de la super tabla de la película, ¿la llevarías?',
        'price': 2,
        'start': 54,
        'end': 73,
        'found': false,
        'image': './assets/images/tabla.jpg'
    },
    {
        'name': 'Bate inspirado en la pelicula',
        'message': '¿Te gustaría tener el bate de la película?',
        'price': 300,
        'start': 109,
        'end': 127,
        'found': false,
        'image': './assets/images/bate.webp'
    },
    {
        'name': 'Zapatos de Martin McFly',
        'message': '¿Te gustaría tener los zapatos de Martin McFly?',
        'price': 400,
        'start': 134,
        'end': 142,
        'found': false,
        'image': './assets/images/zapatos.webp'
    },
    {
        'name': 'Chaqueta futurista',
        'message': 'Te gusta la chaqueta que lleva Martín McFly en la pelicula?, ¡llevatela!',
        'price': 400,
        'start': 225,
        'end': 243,
        'found': false,
        'image': './assets/images/chaqueta.webp'
    }

]
function showVideo() {
    navbar.style.display = 'none';
    videoContainer.style.display = 'flex';
}

document.getElementById('playButton').addEventListener('click', function () {
    videoOverlay.style.display = 'none';
    video.play();
});

document.getElementById('closeButton').addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    videoContainer.style.display = 'none';
    videoOverlay.style.display = '';
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'block';
});

video.addEventListener("pause", function () {
    var currentTime = video.currentTime;
    products.forEach(range => {
        if (currentTime >= range.start && currentTime <= range.end) {
            productImg.src = range.image;
            video.pause();
            cardOverlay.style.display = "";
            titleProduct.innerText = range.name;
            textProduct.innerText = range.message;
            range.found = true;
        }
    });
});

cerrarCardOverlay.addEventListener('click', () => {
    cardOverlay.style.display = "none";
    video.play();
});

video.addEventListener('timeupdate', function () {
    if (Math.floor(video.currentTime) >= 246) {
        video.pause();
        videoOverlayEnd.style.display = '';
        const lengProducts = products.length
        let productsFound = 0;
        products.forEach(product => {
            if (product.found) {
                productsFound++;
            }
        });
        if (productsFound === lengProducts) {
            contentEnd.classList.remove('incmpleted');
            contentEnd.classList.add('completed');
            videoOverlayEnd.classNam = 'completed';
            messageEnd.innerText = '¡Felicidades! Has encontrado todos los objetos ocultos.';

        } else {
            contentEnd.classList.remove('completed');
            contentEnd.classList.add('incompleted');
            videoOverlayEnd.className = 'icompleted';
            videoOverlayEnd.style.display = '';
            messageEnd.innerText = '¡Casi lo logras! Te faltaron algunos objetos ocultos.';
        }
    }
});

document.getElementById('closeOverlayEnd').addEventListener('click', function () {
    video.pause();
    video.currentTime = 0;
    videoOverlayEnd.style.display = 'none';
});

