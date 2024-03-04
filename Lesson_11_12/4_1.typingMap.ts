//4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map(mapper?: () => any, input?: Array<number>): Array<number> | Function {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput?: Array<number>): Array<number> | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}

//example
const arr = [1, 2, 3, 4];
console.log('1. Вызов функции без агргументов (arguments.length === 0)');
console.log(map()); //вывод функции map
console.log('');
console.log('2. Вызов функции c 1 агргументом-маппером (arguments.length === 1)');
const mapper1 = () => 'one';
const two = map(mapper1);
if (typeof mapper1 === 'function') {
  console.log('mapper1 is a function');
  console.log(mapper1, arr); // Вызов функции mapper1 с массивом
} else {
  console.log('mapper1 is an array:', mapper1);
}
console.log('');
console.log('3. Вызов функции c 2 агргументами (arguments.length === 2)');
const mapper2 = () => 1;
const mapper2Array = map(mapper2, arr);
if (Array.isArray(mapper2Array)) {
  console.log('mapper2Array', mapper2Array);
} else {
  console.log('mapper2Array is a function');
}
