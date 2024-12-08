
let numeroSecreto = gerarNumeroAleatorio();

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Secreto';
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo Secreto');
exibirTextoNaTela('p', 'Escolha entre um e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
    }else exibirTextoNaTela('h1', 'Você errou!')
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10);
}