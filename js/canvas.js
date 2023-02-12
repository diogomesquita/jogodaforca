function desenharCanvas() {
    jogo.lineWidth = 8;
    jogo.lineCap = "round";
    jogo.lineJoin = "round";    
    jogo.fillStyle = "#F3F5FC"
    jogo.strokeStyle = "#0A3871"

    jogo.fillRect(0, 0, 1200, 860);
    jogo.beginPath();
    jogo.moveTo(900, 500);
    jogo.lineTo(650, 500);
    jogo.stroke();
    jogo.closePath();
}

function desenharLinhas() {
    jogo.lineWidth = 6;
    jogo.lineCap = "round";
    jogo.lineJoin = "round";    
    jogo.fillStyle = "#F3F5FC";
    jogo.strokeStyle = "#0A3871";

    let tracinhosPalavra = 600/segredo.length;
    for(let i = 0; i < segredo.length; i++) {
        jogo.moveTo(500+(tracinhosPalavra * i), 640);
        jogo.lineTo(550+(tracinhosPalavra * i), 640);
    }
    jogo.stroke();
    jogo.closePath();
}

function escreverAcerto(index) {
    jogo.font = "bold 42px Inter";
    jogo.lineCap = "round";
    jogo.fillStyle = "#0A3871";
    jogo.lineWidth = 6;
    let tracinhosPalavra = 600/segredo.length;
    jogo.fillText(segredo[index], 505+(tracinhosPalavra * index), 620);
}

function escreverErro(letra, erros) {
    jogo.font = "bold 36px Inter";
    jogo.lineCap = "round";
    jogo.fillStyle = "#0A3871";
    jogo.lineWidth = 6;
    jogo.fillText(letra, 520 + (40 * (10 -erros)), 700, 36);
}