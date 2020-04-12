let vetor = [10,2,5,4,3,1]

function functionOrdena(x, y)  {
    return parseInt(x) - parseInt(y)
}


function ordena(vetor) {
    vetor.sort(functionOrdena)
}

console.log(`Vetor ${vetor}`)
ordena(vetor)
console.log(`Vetor ${vetor}`)