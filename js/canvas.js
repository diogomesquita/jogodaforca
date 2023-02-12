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
    jogo.fillStyle = "#F3F5FC"
    jogo.strokeStyle = "#0A3871"

    let tracinhosPalavra = 600/segredo.length;
    for(let i = 0; i < segredo.length; i++) {
        jogo.moveTo(500+(tracinhosPalavra * i), 640);
        jogo.lineTo(550+(tracinhosPalavra * i), 640);
    }
    jogo.stroke();
    jogo.closePath();
}