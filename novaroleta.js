const roleta = document.querySelector('img.roleta');
const wheel = document.querySelector('audio');
const inputValor = document.querySelector('.valor');
const resultado = document.querySelector('.RES');
const video = document.querySelector('.video');
const video1 = document.querySelector('.video1');
const acumuladoInput = document.querySelector('#acumolo');
const sorteioSection = document.querySelector('.sorteio');
const premiacaoSection = document.querySelector('.premiacao');
const abridor0 = document.querySelector('.abridor0')
const abridor1= document.querySelector('.abridor1')
const bone0 = document.querySelector('.bone0')
const bone1 = document.querySelector('.bone1')
const bone2 = document.querySelector('.bone2')
const bone3 = document.querySelector('.bone3')
const bone4 = document.querySelector('.bone4')
const camiseta0 = document.querySelector('.camiseta0')
const camiseta1 = document.querySelector('.camiseta1')
const camiseta2 = document.querySelector('.camiseta2')
const caneca = document.querySelector('.caneca')
const chinelo1 = document.querySelector('.chinelo1')
const chinelo2 = document.querySelector('.chinelo2')
const mousepad = document.querySelector('.mousepad')
const patch0 = document.querySelector('.patch0')
const patch1 = document.querySelector('.patch1')
const patch2 = document.querySelector('.patch2')
const sacochila = document.querySelector('.sacochila')
const suporte = document.querySelector('.suporte')
const vara = document.querySelector('.vara')



roleta.addEventListener('click', girar);

const mostreSorteio = ()=>{
    sorteioSection.style.display = 'block'

}

const ocultaSorteio = ()=>{
    sorteioSection.style.display = 'none'
    
}

function mostrepremio(premioelemento){
    premioelemento.style.display = 'block'
}

function ocultarpremio(premioelemento){
    premioelemento.style.display = 'none'
}



function playVideo(videoElement, y) {
    ocultaSorteio()
    mostrepremio(y)
    vara.style.display = 'none'
    videoElement.style.display = 'block';
    videoElement.style.width = '100vw';
    videoElement.style.height = '100vh';
    videoElement.play();
    

    setTimeout(() => {
        ocultarpremio(y)
        videoElement.style.display = 'none';
        mostreSorteio()
        vara.style.display = 'block'
    }, 7000);
}

function girar() {
    /*if (inputValor.value < 1) {
        resultado.innerHTML = 'Não tem um valor de aposta, favor colocar crédito';
        return;
    }*/

    let acumulado = Number(acumuladoInput.value);
    acumulado += 1;
    acumuladoInput.value = acumulado;

    const rotacaoAleatoria = Math.random() * 7200;
    calcularRotacao(rotacaoAleatoria);

    //inputValor.value = inputValor.value > 1 ? inputValor.value - 1 : '';
}

function calcularRotacao(rotacaoAleatoria) {
    resultado.innerHTML = '';
    const valorRotacao = rotacaoAleatoria % 360;

    roleta.style.transform = `rotate(${rotacaoAleatoria}deg)`;
    wheel.play();

    setTimeout(() => {
        verificarPremio(valorRotacao);
    }, 15500);
}

function verificarPremio(angulo) {
    let premio = '';
    let limiteMaximo = 0;
    let premioelemento = null
    
    if (angulo > 10.7  && angulo <= 31) {
        premio = 'camiseta';
        limiteMaximo = 10;
        premioelemento = camiseta0;
    } else if (angulo > 31 && angulo <= 48.5) {
        premio = 'boné';
        limiteMaximo = 32;
        premioelemento = bone0;
    } else if (angulo > 48.5 && angulo <= 66.7) {
        premio = 'sacochila';
        limiteMaximo = 74;
        premioelemento = sacochila;
    } else if (angulo > 66.7 && angulo <= 82.2) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch0;
    } else if (angulo > 82.2 && angulo <= 101) {
        premio = 'caneca';
        limiteMaximo = 4;
        premioelemento = caneca;
    } else if (angulo > 101 && angulo <= 116.2) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch0;
    } else if (angulo > 116.2 && angulo <= 132.8) {
        premio = 'abridor';
        limiteMaximo = 15;
        premioelemento = abridor0;
    } else if (angulo > 132.8 && angulo <= 149.7) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch1;
    } else if (angulo > 149.7 && angulo <= 170) {
        premio = 'suporte';
        limiteMaximo = 8;
        premioelemento = suporte;
    } else if (angulo > 170 && angulo <= 188) {
        premio = 'sacochila';
        limiteMaximo = 74;
        premioelemento = sacochila;
    } else if (angulo > 188 && angulo <= 208.5) {
        premio = 'chinelo';
        limiteMaximo = 20;
        premioelemento = chinelo1;
    } else if (angulo > 208.5 && angulo <= 226) {
        premio = 'boné';
        limiteMaximo = 32;
        premioelemento = bone1;
    } else if (angulo > 226 && angulo <= 244) {
        premio = 'sacochila';
        limiteMaximo = 74;
        premioelemento = sacochila;
    } else if (angulo > 244 && angulo <= 259.7) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch2;
    } else if (angulo > 259.7 && angulo <= 278.2) {
        premio = 'sacochila';
        limiteMaximo = 74;
        premioelemento = sacochila;
    } else if (angulo > 278.2 && angulo <= 295.5) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch0;
    } else if (angulo > 295.5 && angulo <= 315.6) {
        premio = 'abridor';
        limiteMaximo = 15;
        premioelemento = abridor1;
    } else if (angulo > 315.6 && angulo <= 333) {
        premio = 'patch';
        limiteMaximo = 95;
        premioelemento = patch2;
    } else if (angulo > 333 && angulo <= 353) {
        premio = 'mousepad';
        limiteMaximo = 10;
        premioelemento = mousepad;
    } else if (angulo > 535 & angulo <= 10.7 ) {
        premio = 'sacochila';
        limiteMaximo = 74;
        premioelemento = sacochila;
    }
    if (premio) {
        
        if (verificarLimite(premio, limiteMaximo)) {
            resultado.innerHTML = `O PRÊMIO SORTEADO ${premio === '1' ? 'UM' : premio} JA SE ESGOTOU. VOCÊ PODE GIRAR NOVAMENTE`;
            playVideo(video1);
        } else {
            resultado.innerHTML = `PARABÉNS! VOCÊ GANHOU ${premio === '1' ? 'UM' : premio} `;
            
            playVideo(video, premioelemento);
            adicionarAoEstoque(premio);
            
            
        }
    } else {
        const mensagensAlternativas = [
            { min: 22.5, max: 45, mensagem: 'OPSS! VOCÊ PERDEU TUDO' },
            { min: 67.5, max: 90, mensagem: 'VOCÊ TEM MAIS UMA CHANCE, GIRE NOVAMENTE' },
            { min: 112.5, max: 135, mensagem: 'VOCÊ NÃO GANHOU NADA. ACERTOU O ZERO' },
            { min: 157.5, max: 180, mensagem: 'NÃO FOI DESSA VEZ, MAS NÃO DESISTA' },
            { min: 202.8, max: 225, mensagem: 'AQUI VOCÊ PODE DOBRAR O VALOR DO SEU PRÊMIO' },
            { min: 247.5, max: 270, mensagem: 'VOCÊ PODE GIRAR NOVAMENTE' },
            { min: 292.5, max: 315, mensagem: 'ZERO! VOCÊ NÃO GANHOU NADA' },
            { min: 337.5, max: 360, mensagem: 'OPSS! VOCÊ PERDEU TUDO' }
        ];

        const mensagemAlternativa = mensagensAlternativas.find(m => angulo > m.min && angulo <= m.max);
        if (mensagemAlternativa) {
            resultado.innerHTML = mensagemAlternativa.mensagem;
            playVideo(video1);
        }
    }
}

function verificarLimite(nomePremio, limiteMaximo) {
    const premios = JSON.parse(localStorage.getItem('meuArr')) || [];
    const totalPremios = premios.filter(p => p.nome === nomePremio).length;
    return totalPremios >= limiteMaximo;
}

function adicionarAoEstoque(nomePremio) {
    const premios = JSON.parse(localStorage.getItem('meuArr')) || [];
    premios.push({ nome: nomePremio });
    localStorage.setItem('meuArr', JSON.stringify(premios));
}

function carregarJogo() {
    acumuladoInput.value = 0;
    mostreSorteio()
}

carregarJogo();
 