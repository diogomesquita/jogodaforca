let addPalavra = document.querySelector("#addPalavra");
let jogo = document.querySelector("#forca").getContext('2d');
let segredos = ["DEUS", "VIDA", "FAMILIA", "GRATIDAO", "SUCESSO", "LIBERDADE", "PAZ", "RESPEITO", "OBJETIVO", "ESCOLHAS"];
let segredo = "";
let letras = [];
let gameOver = 9;

addPalavra.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        segredos.push(addPalavra.value.toUpperCase());
        console.log(segredos);
    }
});

function sortearPalavra() {
    let palavra = segredos[Math.floor(Math.random() * segredos.length)];
    segredo = palavra;
}

function verificarLetra(key) {
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(key);
        console.log(letras);
        return estado;
    } else {
        estado = true;
        letras.push(key);
        console.log(key, "do true");
        console.log(letras, "do true");
        return estado;
    }
}

function contarErros() {
    gameOver -= 1;
    bonequinho(gameOver);
    console.log(gameOver);
}

function iniciarJogo() {
    document.querySelector(".menuInicial").style.display = "none";
    sortearPalavra();

    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if(verificarLetra(letra) && segredo.includes(letra)) {
            for(let i = 0; i < segredo.length; i++) {
                if(segredo[i] === letra){
                    escreverAcerto(i);
                }
            }
        } else {
            contarErros();
            escreverErro(letra, gameOver);
        }
    }
}