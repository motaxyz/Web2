let entrada = require('prompt-sync')();
let valor = '';

console.log('Programa que recebe quatro números.');
valor = entrada('Digite o primeiro número: ');
let n1 = parseFloat(valor);
valor = entrada('Digite o segundo número: ');
let n2 = parseFloat(valor);
valor = entrada('Digite o terceiro número: ');
let n3 = parseFloat(valor);
valor = entrada('Digite o quarto número: ');
let n4 = parseFloat(valor);

let soma = n1 + n2 + n3 + n4;
let subtracao = n1 - n2 - n3 - n4;
let multiplicacao = n1 * n2 * n3 * n4;
let resto = n1 % n2 % n3 % n4;
let media = (n1+n2+n3+n4)/4

console.log(n1 + ' + ' + n2 + ' + ' + n3 + ' + ' + n4 + ' + ' + ' = ' + soma);
console.log(n1 + ' - ' + n2 + ' - ' + n3 + ' - ' + n4 + ' - ' + ' = ' + subtracao);
console.log(n1 + ' * ' + n2 + ' * ' + n3 + ' * ' + n4 + ' * ' + ' = ' + multiplicacao);
console.log(n1 + ' % ' + n2 + ' % ' + n3 + ' % ' + n4 + ' % ' + ' = ' + resto);
console.log('A média dos números é = ' + media)
console.log('Pressione ENTER para encerrar!');
entrada();