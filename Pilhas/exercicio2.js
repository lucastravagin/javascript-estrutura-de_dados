let baseConverter = (decNumber, base) => {
    let restStack = [],
    baseString = '',
    digits = '0123456789ABCDEF'

    //restStack = [1,]

    while(decNumber > 0 ) { //[123, 26]
        rest = Math.floor(decNumber % base)
        restStack.push(rest) //[1]
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}