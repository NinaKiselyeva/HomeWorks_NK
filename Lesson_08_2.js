//2. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
//Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c'] 
//получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function addToArr(arr, num, data) { //num - индекс массива, на который хотим вставить новые элементы, data - массів новых элементов
    const index = arr.findIndex (el => el === num);
    //const length = arr.length;
            //console.log(index);
            if (num >= 0 && num <=arr.length) { //проверка на введение положительного индекса, по значению не превышающего длину массива
            return index !== -1 ? [
                ...arr.slice(0, index +1),
                ...data,
                ...arr.slice(index + 1)
            ] : [
                ...data,
                ...arr
            ]
        }
        if (num > arr.length) {
            return "!Ошибка. Индекс элемента массива не может быть больше длины массива"
        }
        else return "!Ошибка. Индекс элемента массива не может быть отрицательным";
};

        let originalArray = [1, 2, 3, 4, 5, 6]; //задать первоначальный массив
        let num = 8; //индекс массива, на место которого нужно вставить новые элементы
        let dataToInsert = ['a', 'b', 'c'];
        console.log("Количество элементов первоначального массива = ", originalArray.length);
        console.log("Индекс массива для вставки data = ", num);
        console.log("Результат: ", addToArr(originalArray, num, dataToInsert));