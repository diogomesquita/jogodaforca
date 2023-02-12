let addPalavra = document.querySelector("#addPalavra");
let jogo = document.querySelector("#forca").getContext('2d');
let segredos = ["DEUS", "VIDA", "FAMILIA", "GRATIDAO", "SUCESSO", "LIBERDADE", "PAZ", "RESPEITO", "OBJETIVO", "ESCOLHAS"];
let segredo = "";
let letras = [];
let erros = [];
let acertos = 0;
let gameOver = 9;

addPalavra.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        segredos.push(addPalavra.value.toUpperCase());
    }
});

function sortearPalavra() {
    let palavra = segredos[Math.floor(Math.random() * segredos.length)];
    segredo = palavra;
    console.log(segredo);
}

function verificarLetra(key) {
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        return estado;
    } else {
        estado = true;
        letras.push(key);
        return estado;
    }
}

function contarErros() {
    gameOver -= 1;
    bonequinho(gameOver);
}

function iniciarJogo() {
    document.querySelector(".menuInicial").style.display = "none";
    sortearPalavra();

    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();

        if(!letras.includes(letra)){
            if(verificarLetra(letra) && segredo.includes(letra)) {
                for(let i = 0; i < segredo.length; i++) {
                    if(segredo[i] === letra){
                        escreverAcerto(i);
                        acertos++;
                    }
                }
            } else {
                if(!erros.includes(letra)) {
                    contarErros();
                    escreverErro(letra, gameOver);
                    erros.push(letra);
                }
            }
    
            verificarAcertos();
            console.log(acertos);
        }
    }
}