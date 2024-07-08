var alunosNomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gustavo", "Helena", "Igor", "Juliana"]

var alunos = alunosNomes.map(function(nome) {
    return {
        nome: nome,
        nota: Math.floor(Math.random() * 11),
    }
})

console.log(alunos.filter( aluno => aluno.nota >= 6));
