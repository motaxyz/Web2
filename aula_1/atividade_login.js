const entrada = require('prompt-sync')();
const senha = '1234';

let senhaDigitada = '';
let tentativas = 0;

do {
    senhaDigitada = entrada('Digite a senha: ');
    
    if (senhaDigitada==senha){
    console.log('Você acessou o sistema')
    break;
    } else {
        tentativas++;
            if (tentativas == 3){
                console.log('Você excedeu o limite de 3 tentativas!')
            }
    }
} while (tentativas < 3);

// senhaDigitada = entrada('Digite a senha: ');

// if(senhaDigitada == senha){
//      console.log('Você acessou o sistema!');
//  }
//  else {
//      for (let i=1;i<3;i++){
//          senhaDigitada = entrada('Digite a senha novamente: ');  
//  }
//      console.log('Você excedeu o limite de 3 tentativas!');
//  }