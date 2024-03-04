/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer?: () => any, input?: Array<string>): Array<string> | Function {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput?: Array<string>): Array<string> | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

//example
const arr = ['grey', 'yellow', 'white'];
console.log('1. Вызов функции без агргументов (arguments.length === 0)');
console.log(filter()); //вывод функции filter
console.log('');
console.log('2. Вызов функции c 1 агргументом-filterer (arguments.length === 1)');
const filterer = ['black', 'white'];
if (typeof filterer === 'function') {
  console.log('filterer is a function');
  console.log(filterer, arr); // Вызов функции filter с массивом
} else {
  console.log('filterer is an array:', filterer);
}
console.log('');
console.log('3. Вызов функции c 2 агргументами (arguments.length === 2)');
const filterer2 = () => 1;
const filterer2Array = filter(filterer2, arr);
if (Array.isArray(filterer2Array)) {
  console.log('filterer2Array', filterer2Array);
} else {
  console.log('filterer2Array is a function');
}
