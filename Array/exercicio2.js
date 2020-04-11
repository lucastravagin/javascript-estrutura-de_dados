// let vetor = [1,2,3,4,5]

// for(let i in vetor) {
//     console.log(i) //Imprime os indices do array
// }

//Sua tia, professora, encomendou um trabalho para você.
//Ela quer que você crie um script que vai pedir o número de alunos da turma (peça via prompt mesmo).
//Em seguida, vai perguntar qual foi a nota de cada um deles.
//No final, seu script deve fornecer a média geral da turma.
//Use array para armazenar as notas, laço FOR para preencher cada elemento do array e um laço FOR IN para calcular a soma das notas (cálculo necessário para calcular a média).

let numeroDeAlunos = 10
let mediaDaSala = 0
let alunosDaTurma = new Array(numeroDeAlunos)


for(let i = 0; i < alunosDaTurma.length; i++) {
    alunosDaTurma[i] = i
}


for(let array in alunosDaTurma) {
    let nota = Math.round((Math.random() * 10))
    console.log(`Aluno ${array} nota ${nota}`);
    mediaDaSala = (mediaDaSala + nota)
}

console.log(mediaDaSala / numeroDeAlunos)