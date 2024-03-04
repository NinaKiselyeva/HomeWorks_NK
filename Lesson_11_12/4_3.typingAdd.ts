/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a?: number, b?: number): number | Function {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB?: number): number | Function {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}

//example
console.log(add()); // вернет функцію add
console.log(add(0, 0)); //0
console.log(add(5)); //вернет функцію subFunction
console.log(add(null, null)); //0
console.log(add(2, 1)); //3
