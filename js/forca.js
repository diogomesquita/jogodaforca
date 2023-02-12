let segredos = ["Deus", "vida", "familia", "gratidao", "sucesso", "liberdade", "paz", "respeito", "objetivo", "escolhas"];
let segredo = "";
let jogo = document.querySelector("#forca").getContext('2d');

function sortearPalavra() {
    let palavra = segredos[Math.floor(Math.random() * segredos.length)];
    segredo = palavra;
}

function iniciarJogo() {
    document.querySelector(".menuInicial").style.display = "none";
    sortearPalavra();
    desenharCanvas();
    desenharLinhas();
}