//Crie um script que declara um array de 10 posições
//inicialize cada elemento com o valor do seu indice

// let vetor = new Array(10)

// for(let i = 0; i < vetor.length; i++) {
//     vetor[i] = i
// }

// console.log(vetor);

//Crie um array com 101 posições. Cada elemento deve conter o quadrado do seu
// índice
//Exiba eles de uma maneira organizada:
//Posição 0 = 0
//Posição 1 = 1
//Posição 2 = 4
//Posição 3 = 9
//Posição 4 = 16

let vetor = new Array(101)

for(i = 0; i < vetor.length; i++) {
    console.log(`Posição ${i} = ${i * i}`)
}


