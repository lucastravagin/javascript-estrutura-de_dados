//Algorítmos manipulam dados e quando estes dados estão organizados de forma
//coerente caracterizam uma estrutura de dados

//Exercicios Decimal para binário


let dec2Bin = (decNumber) => {
    let restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0 ) {
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString
}   