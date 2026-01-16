/*Wenn man : number[] nicht macht könnte man auch einen String als Value im Array nemen
*/
let numbers: number[] = [1, 2, 3]
let notNumbers = [ 1, 2, "3"]
//Arrays vom Type Any sollte man vermeiden 
let anyNumbers = [1]

console.log(numbers, notNumbers, anyNumbers)
