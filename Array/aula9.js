//Array Multidimensional

let month = []

let firstWeeks = []
let lastWeeks = []

let avgTempWeek = []
let avgTempWeek1 = [25,36,53,25,23,33]
let avgTempWeek2 = [25,36,53,32,23,33]
let avgTempWeek3 = [25,36,53,5,23,33]
let avgTempWeek4 = [25,36,53,9,23,33]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]


for(i = 0; i < month.length; i++) {
    for(j=0; j < month[i].length; j++) {
        for(k = 0; k < month[i][j].length; k++) {
            console.log(month[i][j][k]);
        }
    }
}