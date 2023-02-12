function desenharCanvas() {
    jogo.lineWidth = 8;
    jogo.lineCap = "round";
    jogo.lineJoin = "round";    
    jogo.fillStyle = "#F3F5FC"
    jogo.strokeStyle = "#0A3871"

    jogo.fillRect(0, 0, 1280, 800);
    jogo.beginPath();
    jogo.moveTo(500, 350);
    jogo.lineTo(800, 350);
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
        jogo.moveTo(370+(tracinhosPalavra * i), 450);
        jogo.lineTo(420+(tracinhosPalavra * i), 450);
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
    jogo.fillText(segredo[index], 375 + (tracinhosPalavra * index), 430);
}

function escreverErro(letra, erros) {
    jogo.font = "bold 36px Inter";
    jogo.lineCap = "round";
    jogo.fillStyle = "#0A3871";
    jogo.lineWidth = 6;
    jogo.fillText(letra, 400 + (40 * (10 -erros)), 500, 36);
}

function bonequinho(gameOver) {

    if(gameOver === 8){
        jogo.moveTo(500, 350);
        jogo.lineTo(500, 50);
        jogo.stroke();
    }

    if(gameOver === 7){
        jogo.moveTo(500, 50);
        jogo.lineTo(650, 50);
        jogo.stroke();
    }

    if(gameOver === 6){
        jogo.moveTo(630, 50);
        jogo.lineTo(630, 100);
        jogo.stroke();
    }

    if(gameOver === 5){
        jogo.arc(630, 120, 20, 0, Math.PI*2, true);
        jogo.stroke();
    }

    if(gameOver === 4){
        jogo.moveTo(630, 140);
        jogo.lineTo(630, 200);
        jogo.stroke();
    }

    if(gameOver === 3){
        jogo.moveTo(630, 200);
        jogo.lineTo(660, 250);
        jogo.stroke();
    }

    if(gameOver === 2){
        jogo.moveTo(630, 200);
        jogo.lineTo(600, 250);
        jogo.stroke();
    }

    if(gameOver === 1){
        jogo.moveTo(630, 155);
        jogo.lineTo(660, 160);
        jogo.stroke();
    }

    if(gameOver === 0){
        jogo.moveTo(630, 155);
        jogo.lineTo(600, 160);
        jogo.stroke();
    }

    if(gameOver < 0) {
        jogo.fillText("GAME  OVER", 507, 200)
    }
}