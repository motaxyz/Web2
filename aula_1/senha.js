const entrada = require ('prompt-sync')();

const senha = '12357908642';
let senhaDigitada = '';

do {
    senhaDigitada = entrada('Digite a senha: ');
} while (senha != senhaDigitada);

console.log('Você acessou o sistema!');