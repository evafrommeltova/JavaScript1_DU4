// Maximum ze tří čísel

let max3 = (number1, number2, number3)=> {

    if (number1 >= number2 && number1 >= number3) {
        maxNumber = number1;
    } else if (number2 >= number1 && number2 >= number3) {
        maxNumber = number2;
    } else {
        maxNumber = number3;
    }
    return maxNumber
}   

let num1 = Number(prompt("Zadej první číslo"))
let num2 = Number(prompt("Zadej druhé číslo"))
let num3 = Number(prompt("Zadej třetí číslo"))

let result = max3(num1,num2,num3)

document.body.innerHTML = `Maximální číslo z čísel ${num1},${num2},${num3} je číslo ${result}`;