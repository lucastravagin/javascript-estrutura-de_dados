let vetor = [10, 2, 5, 4, 3, 1, 11, 99, 76, 54, 23, 29, 49, 86, 66, 55, 44, 33, 22, 88, 3];

let num = 3

let search = (vetor, elemento) => { 
    if(vetor.indexOf(elemento) >= 0) {
        console.log(`Está no índice ${vetor.indexOf(elemento)}`)
    }else {
        console.log('Não está no array');
        
    }
}

let searchLastIndex = (vetor, elemento) => { 
    if(vetor.lastIndexOf(elemento) >= 0) {
        console.log(`Está no índice ${vetor.lastIndexOf(elemento)}`)
    }else {
        console.log('Não está no array');
        
    }
}
search(vetor,num)
searchLastIndex(vetor,num)