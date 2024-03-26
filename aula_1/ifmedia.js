let entrada = require('prompt-sync')();
let valor = '';

console.log('Programa que recebe quatro notas e calcula a média.');
valor = entrada('Digite a primeira nota: ');
let n1 = parseFloat(valor);
valor = entrada('Digite a segunda nota: ');
let n2 = parseFloat(valor);
valor = entrada('Digite a terceira nota: ');
let n3 = parseFloat(valor);
valor = entrada('Digite a quarta nota: ');
let n4 = parseFloat(valor);

let media = (n1 + n2 + n3 + n4)/4

console.log('\nA média final é: ' + media.toFixed(2));


if(media >= 7 ) {
    console.log('\nVocê foi aprovado!')
}

else if (media >= 4) {
    console.log('\nVocê está de recuperação!')
}

else {
    console.log('\nVocê está reprovado!')
}