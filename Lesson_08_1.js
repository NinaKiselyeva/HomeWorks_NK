//1. Написать функцию, которая будет записывать в массив ряд фибоначчи,
// начиная с N члена с длинной массива M. В функцию надо передать номер 
//числа фибоначчи с которого начинается массив (N) и длину, которой должен быть массив (M).

function getFibonacci (number) {
    return number <= 1 ? number : getFibonacci(number - 1) + getFibonacci (number - 2)
}
//console.log(getFibonacci(4));

function addArray (n, m) {
    let arr = new Array();
    if (m !== 0) {
    for (let i=n; i < m+n; i++) {
        arr.push(getFibonacci(i));
        //console.log(arr);
    }
    return arr;
    } else return null;
}

let n = 3; //номер(индекс) числа Фибоначчи с которого начинается массив 
let m = 10; //длина ожидаемого массива
const arr = addArray(n, m);
console.log("Ряд Фибоначчи, начиная с " + n + "-го числа в ряду, длиной массива " + m + ":");
console.log(arr);
