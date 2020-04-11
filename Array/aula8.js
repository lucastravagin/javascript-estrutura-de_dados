//Arays Bidimensionais


let avgTempWeek = []
let avgTempWeek1 = [25,36,53,25,23,33]
let avgTempWeek2 = [25,36,53,25,23,33]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

//Imprimir todos os valores no console
for(i = 0; i < avgTempWeek.length; i++) {
    for(j = 0; j < avgTempWeek[i].length; j++) {
        console.log(avgTempWeek[0][j]);
    }
}