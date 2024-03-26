const entrada = require('prompt-sync')();

let idadeTxt = entrada('Digite sua idade: ');
let idade = parseInt(idadeTxt);

if(idade > 18) {
    console.log('Você tem mais que 18 anos');
}

if(idade < 18) {
    console.log('Você tem menos que 18 anos');
}

if (idade === 18 ){
    console.log('Você tem 18 anos');
}

