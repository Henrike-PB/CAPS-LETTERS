// Variávéis 

let cap = document.getElementById("cap");
let footer = document.querySelector("footer");
let direction = 1;
let x = 0;
let intervalId;


// função da movimentação da capivara
function moveImage() {
    // Variável que recebe o width do footer
    let footerWidth = footer.offsetWidth;
    // Variável que recebe o width da capivara
    let imageWidth = cap.width;

    x += 5 * direction;

    // condição if para detectar o fim e inicio do footer para a capivara mudar sua direcão
    if (x >= footerWidth - imageWidth) {
        cap.src = './img/cap-move1.gif';
        direction = -2;
    } else if (x <= 0) {
        cap.src = './img/cap-move2.gif';
        direction = 1;
    }

    cap.style.left = x + 'px';
}

// velocidade da capivara 
intervalId = setInterval(moveImage, 50);

window.addEventListener('resize', function() {
    clearInterval(intervalId);
    intervalId = setInterval(moveImage, 50);
});

