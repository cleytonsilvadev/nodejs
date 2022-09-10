const chalk = require('chalk')

const nota = 9

if(nota>=7){
    console.log(chalk.green('Parabens! você está aprovado'))
}else{
    console.log(chalk.bgred.black('voce precisa fazer a prova de recuperação'))
}