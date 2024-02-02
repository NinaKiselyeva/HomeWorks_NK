let name = 'Alex';
let surName = "Ivanov";
let age = 38;
let children = true;
let quantityChildren = 2;
console.log(`Patient Name is ${name} ${surName}, ${age} years old, having children:${children}, ${quantityChildren}`);      // expected output: Patient Name is Alex Ivanov, 38 years old, having children:true, 2

//1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let a = 5;
let b = "years";
let c = 6;
let d = 'months';
let week = "week";
let daysOfWeek = 7;

console.log('');
console.log('>>> Addition string+number');
console.log(a+b);                                               // expected output: 5years
console.log(5+6+" months");                                     // expected output: 11 months
console.log("days of"+ " week "+'number: ' +daysOfWeek);        // expected output: days of week number: 7
console.log(parseInt('55кг')+','+(c*100)+'kg');                 // expected output: 55,600kg
console.log(daysOfWeek+'');                                     // expected output: 7

console.log('');
console.log('>>> Addition string+boolean');
console.log(name+children);                                     // expected output: Alextrue
console.log(Boolean(1)+surName);                                // expected output: trueIvanov
console.log(Boolean(0)+surName);                                // expected output: falseIvanov
console.log(Boolean(NaN)+'RESULT');                             // expected output: falseRESULT
console.log(String(children)+children);                         // expected output: truetrue

console.log('');
console.log('>>> Addition number+boolean');
console.log(5+Boolean(NaN));                                    // expected output: 5
console.log(5+Number(Boolean(0)));                              // expected output: 5
console.log(5+Number(Boolean(true)));                           // expected output: 6
console.log(5+Boolean(1));                                      // expected output: 6
console.log(a+c+Number(children));                              // expected output: 12
console.log(String(children)+Number(children));                 // expected output: true1

//2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log('');
console.log('>>> Multiplication string * boolean');
console.log(d*children);                                        // expected output: NaN
console.log(d*Boolean(0));                                      // expected output: NaN
console.log(Boolean("Hello")*daysOfWeek/0);                     // expected output: Infinity

console.log('');
console.log('>>> Multiplication string * number');
console.log(d*6);                                               // expected output: NaN
console.log(d*null);                                            // expected output: NaN
console.log(week*daysOfWeek/0);                                 // expected output: NaN

console.log('');
console.log('>>> Multiplication number * boolean');
console.log(55*children);                                       // expected output: 55 (number)
console.log(c*Boolean(0));                                      // expected output: 0 (number)
console.log(Boolean(' ')*daysOfWeek);                           // expected output: 7 (number)
console.log(Boolean('')*12);                                    // expected output: 0 (number)
console.log(Boolean(null)*123);                                 // expected output: 0 (number)

//3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log('');
let work = false;
console.log(18/3/3);                                            // expected output: 2
console.log((1000/50)/2);                                       // expected output: 10

console.log('');
console.log('>>> Division string/boolean');
console.log("Hello"/children);                                  // expected output: NaN
console.log(d/Boolean(true));                                   // expected output: NaN
console.log(week/Boolean(" "));                                 // expected output: NaN

console.log('');
console.log('>>> Division string/number');
console.log("Hello"/0);                                         // expected output: NaN
console.log(d/18);                                              // expected output: NaN
console.log(week/7);                                            // expected output: NaN
console.log("Привет"/1);                                        // expected output: NaN
console.log("Привет"/null);                                     // expected output: NaN

console.log('');
console.log('>>> Division number/boolean');
console.log(10/children);                                       // expected output: 10
console.log(10/work);                                           // expected output: infinity
console.log(c/Boolean(true));                                   // expected output: 6
console.log(daysOfWeek/Boolean(" "));                           // expected output: 7
console.log(c/(Number(Boolean(true))));                         // expected output: 6
console.log(a/Boolean(1));                                      // expected output: 5
console.log(a/children);                                        // expected output: 5

//4) Выполнить явное преобразование(number, string, boolean)
let age1 = Number("Преобразовать строку в число");
let age2 = undefined;
let nul = null;
let war1 = 'WorldWar II started in 1939';
let war2 = "1939year";
let war3 = '   1939   ';
let num1 = '33'
let num2 = '66'
console.log('');
console.log('>>> STRING to NUMBER');
console.log(age1);                                              // expected output: NaN
console.log(Number(age2));                                      // expected output: NaN
console.log(Number(nul));                                       // expected output: 0
console.log(Number(war1));                                      // expected output: NaN
console.log(Number(war2));                                      // expected output: NaN
console.log(num2/num1);                                         // expected output: 2
console.log(Number(num1)+ Number(num2));                        // expected output: 99
console.log(''+ num2);                                          // expected output: 66 (string)
console.log(Number('')+ Number(num2+''));                       // expected output: 66 (number)
console.log(Number(Math.PI))                                    // expected output: 3.14... (number)

console.log('');
console.log('>>> NUMBER/BOOLEAN to STRING');
console.log(String(children), typeof(children));                // expected output: true boolean
console.log(String(children) + ' ?');                           // expected output: true ?
console.log(String(Boolean(0)));                                // expected output: false
console.log(String(c));                                         // expected output: 6 (string)
console.log(String(56+18));                                     // expected output: 74 (string)

console.log('');
console.log('>>> BOOLEAN to NUMBER');
let bool1 = Number(true);
let bool2 = false;
console.log(bool1);                                             // expected output: 1
console.log(Number(bool2));                                     // expected output: 0
console.log(Number(bool2)+(bool1*5));                           // expected output: 5