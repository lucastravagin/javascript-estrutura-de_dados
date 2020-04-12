/* 
01. Crie uma função que recebe um array de 
2 números e coloque eles em ordem crescente. 
Não use o método sort.
*/

let vetor = [18, 1]

let ordemCrescente = (vetor) => {
    if (vetor[0] < vetor[1]) {
        console.log(vetor)
    } else {
        console.log(vetor = [vetor[1], vetor[0]]);
        
    }
}

ordemCrescente(vetor)

/* 
02. Crie uma função que recebe um array de 
3 números e coloque eles
em ordem crescente. Crie sua própria função para isso.
*/

let array = [8,1,3]
let arrayCrescente = []

let ordemCrescente = (array) => {
    if(array[0] <= array[1] && array[0] <= array[2] ) {
        if(array[1] <= array[2]) {
            console.log(arrayCrescente = [array[0], array[1], array[2]])
        } else {
            console.log(arrayCrescente = [array[0], array[2], array[1]])
        }
    } else if (array[1] <= array[2] && array[1] <= array[0]) {
        if(array[2] <= array[0]) {
            console.log(arrayCrescente = [array[1], array[2], array[0]])
        }
    }else {
           console.log(arrayCrescente = [array[2], array[0], array[1]])
    }
}

ordemCrescente(array)

/*  
03. Crie um script que pergunte 3 números ao usuário, 
coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de 
números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/

let array = [2,4,7]

let meuArrayInvertido = array.map(function(item, indice, array) {
    console.log(indice)
    return  array[array.length - indice - 1]
})

console.log(meuArrayInvertido)

/*05. Faça uma função que recebe um array de qualquer 
tamanho e ordene seus elementos na ordem 
crescente. Faça sua função na mão, não invoque nenhum
 método de sorting. Dica: pesquise sobre bubble sort.
 */

let numbers = [10, 3, 8, 23, 2, 30]

function bubblesort(items) {
    let swap
    let last = items.length -1
    do {
        swap = false
        for (let i = 0; i < last; i ++) {
            if (items[i] > items[i + 1]) {
                [items[i], items[i + 1]] = [items[i + 1], items [i]]
            }
        }
        last --
    }while (swap)
    return items
}

numbers = bubblesort(numbers)
console.log(numbers)

/* 
Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número 
aparece no vetor, e não só apenas o primeiro e/ou  
último índice em que o número aparece (como nos métodos 
indexOf e lastIndexOf).
*/

let vetor = [1,2,3,1,3,3,4,4,4,2,4,2,3]

let funcaoMostraIndice = (vetor, numero) => {
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] == numero) {
            console.log(i)
        }
    }
}
console.log(funcaoMostraIndice(vetor, 3))

/*07. Crie um script que pede um inteiro positivo para o usuário. 
Em seguida, popule uma array com os números de Fibonacci, na hora de 
somar com os termos anteriores, some com elementos anteriores do array.
*/

let fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(fibonacci)
