const readline = require('readline');

function somar(a, b) {
    return a + b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Digite o primeiro numero: ", a => {
    rl.question("Digite o segundo numero: ", b => {
        console.log('A soma: ', somar(parseInt(a), parseInt(b)))
    rl.close();
    })
})
