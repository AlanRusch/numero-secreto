let listaDeNumerosSorteados = [];
let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo Secreto';
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirPrimeiraMensagem() {
    exibirTextoNaTela('h1', 'Jogo Secreto');
    exibirTextoNaTela('p', 'Escolha entre um e 10');
}
exibirPrimeiraMensagem()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor');
        }else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas++
        limparoCampo();
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() *numeroMax);
  let quantDeNumEscolhidos = listaDeNumerosSorteados.length;

  if (quantDeNumEscolhidos == numeroMax){
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparoCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparoCampo();
tentativas = 1;
exibirPrimeiraMensagem();
document.getElementById('reiniciar').setAttribute('disabled',true);
}