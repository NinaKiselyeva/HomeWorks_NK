//2. Напишите функцию, которая вставит данные в массив с заданного места в массиве. 
//Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c'] 
//получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function addToArr(arr, num, data) { //num - индекс массива, на который хотим вставить новые элементы, data - массів новых элементов
    const index = arr.findIndex (el => el === num);
            //console.log(index);
            if (num>=0) { //проверка на введение положительного индекса, тестировщика в тестировщике не убьешь)
            return index !== -1 ? [
                ...arr.slice(0, index +1),
                ...data,
                ...arr.slice(index + 1)
            ] : [
                ...data,
                ...arr
            ]
        }
        else return "Ииндекс элемента массива не может бвть отрицательным";
};

        let originalArray = [1, 2, 3, 4, 5]; //задать первоначальный массив
        let num = 0; //индекс массива, на место которого нужно вставить новые элементы
        let dataToInsert = ['a', 'b', 'c'];
        console.log(addToArr(originalArray, num, dataToInsert));