let vetor = [1,2,3,4,5]


let dobra = (array) => {
    for(i = 0; i < array.length; i++) {
        console.log(array[i] *= 2)
    }
    return array
}

dobra(vetor)