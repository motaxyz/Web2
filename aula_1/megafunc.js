const entrada = require('prompt-sync')();

let resMegaSena = [];
let meuJogo = [];
let acertos = 0;

function verificarRepeticao(nVerificar, arr){
    let repetido=0;
    for (let i = 0; i < arr.length; i++){
        if(nVerificar == arr[i]){
            repetido++;
        }
    }
    if(repetido>0){
        return true;
    } else {
        return false;
    }
    
}



for (let i = 0; i < 15; i++) {
    const numero = Math.floor(Math.random() * 25) + 1;
    if(verificarRepeticao(numero, resMegaSena)){
        i--;
    } else{
        resMegaSena.push(numero);
    }
    
}

for (let i = 1; i <= 15; i++) {
    let numero = entrada('Digite o ' + i + 'º nº do jogo: ');
    if(verificarRepeticao(numero, meuJogo)){
        i--;
    } else{
        meuJogo.push(numero);
    }
    
}

for (let nMega = 0; nMega < resMegaSena.length; nMega++) {
    for (let nJogo = 0; nJogo < meuJogo.length; nJogo++) {
        if (resMegaSena[nMega] == meuJogo[nJogo]) {
            acertos++;
        }
    }
}

console.log('');
console.log('-');
console.log('');

let mensagem = 'Resultado do sorteio: ';

for (let n = 0; n < resMegaSena.length; n++) {
    mensagem = mensagem + resMegaSena[n] +
        (resMegaSena.length == n + 1 ? '' : ' - ');
}

mensagem = 'Seu Jogo: ';

for (let n = 0; n < meuJogo.length; n++) {
    mensagem = mensagem + meuJogo[n] +
        (meuJogo.length == n + 1 ? '' : ' - ');
}

console.log(mensagem);


//log mostrar resultado
mensagem = 'Resultado: ';

for (let n = 0; n < resMegaSena.length; n++) {
    mensagem = mensagem + resMegaSena[n] +
        (resMegaSena.length == n + 1 ? '' : ' - ');
}

console.log(mensagem);
console.log('');
console.log('Você acertou ' + acertos + ' número' + (acertos > 1 ? 's' : ''));