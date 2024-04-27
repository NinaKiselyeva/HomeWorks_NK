//Добрый день.
//1. Файл calculator.js лежит в облаке;
//2. Создать проект для автотестов;
//3. Выбрать один из пройденных фреймворков: Jasmine, Mocha, Jest;
//4. Написать максимальное количество юнит тестов для методов класса, каждый тест должен содержать проверку;
//5. Установить eslint, настроить правила для статической проверки кода, добавить папки, которые не надо проверять в игнор на проверку.

import { expect } from "chai";
import { Calculator } from "../calculator.js";

describe("Calculator Test", function () {
  let calculator;

  const invalidValues = [
    { input: [2, "3"] },
    { input: ["2", "3"] },
    { input: ["a", 3.5] },
    { input: [true, 18] },
    { input: [null, 18] },
    { input: [undefined, 18] },
    { input: [18, {}] },
    { input: [[], 18] },
  ];

  this.beforeEach(async () => {
    calculator = new Calculator();
  });

  describe("#add()", function () {
    it("Should add two positive integer numbers correctly, 1 + 3 = 4", async () => {
      expect(calculator.add(1, 3)).to.equal(4);
    });

    it("Should add two negative integer numbers correctly, (-5) + (-8) = -13", async () => {
      expect(calculator.add(-5, -8)).to.equal(-13);
    });

    it("Should add positive and negative integer numbers correctly, 11 + (-6) = 5", async () => {
      expect(calculator.add(11, -6)).to.equal(5);
    });

    // Тесты для сложения с участием дробных чисел
    const testDataAddFractional = [
      { input: [1, 123.456], expected: 124.456 },
      { input: [1, -123.456], expected: -122.456 },
      { input: [9.9999, 10], expected: 19.9999 },
      { input: [-9.9999, 10], expected: 0.0001 },
      { input: [0.565, 3.42], expected: 3.985 },
      { input: [-0.565, -3.42], expected: -3.985 },
      { input: [-0.565, 3.42], expected: 2.855 },
      { input: [0.565, -3.42], expected: -2.855 },
      { input: [Number.MIN_VALUE, 1], expected: Number.MIN_VALUE + 1 },
      { input: [Number.MIN_VALUE, -1], expected: Number.MIN_VALUE - 1 },
    ];
    testDataAddFractional.forEach(({ input, expected }) => {
      it(`Should result adding fractional numbers ${input[0]} and ${input[1]} equals ${expected}`, async () => {
        expect(calculator.add(...input)).to.be.closeTo(expected, 0.0001);
      });
    });

    // Тесты для сложения с 0
    const testDataAddZero = [
      { input: [0, 856], expected: 856 },
      { input: [-4321, 0], expected: -4321 },
      { input: [3.5, 0], expected: 3.5 },
      { input: [0, -2.25], expected: -2.25 },
      { input: [0, 0], expected: 0 },
      { input: [Number.MIN_VALUE, 0], expected: Number.MIN_VALUE },
      { input: [Number.MAX_VALUE, 0], expected: Number.MAX_VALUE },
      { input: [Number.MIN_SAFE_INTEGER, 0], expected: Number.MIN_SAFE_INTEGER },
      { input: [Number.MAX_SAFE_INTEGER, 0], expected: Number.MAX_SAFE_INTEGER },
    ];
    testDataAddZero.forEach(({ input, expected }) => {
      it(`Should result adding ${input[0]} and ${input[1]} equals ${expected}`, async () => {
        expect(calculator.add(...input)).to.equal(expected);
      });
    });

    it("Should add big numbers correctly", async () => {
      expect(calculator.add(9007199254740992, 9007199254740992)).to.equal(18014398509481984);
    });

    it("Should add several numbers correctly", async () => {
      expect(calculator.add(5, 18, -3, 1.555, -1, 600, 0)).to.equal(620.555);
    });

    it("Should result 0 if no numbers are added", async () => {
      expect(calculator.add()).to.equal(0);
    });

    it("Should correctly handle adding numbers near the minimum value", function () {
      expect(calculator.add(Number.MIN_SAFE_INTEGER, 1)).to.equal(Number.MIN_SAFE_INTEGER + 1);
    });

    it("Should correctly handle adding numbers near the maximum value", function () {
      expect(calculator.add(Number.MAX_SAFE_INTEGER, -1)).to.equal(Number.MAX_SAFE_INTEGER - 1);
    });

    // Тесты для обработки сложения при передаче некорректных(нечисловых) аргуметов
    invalidValues.forEach((input) => {
      it(`Should result an Error if non-number arguments are provided for add, ${input.input[0]} and ${input.input[1]} equals TypeError`, async () => {
        //Тесты падают, так как в исходном коде нет валидации типов данных аргументов
        expect(() => calculator.add(...input.input)).to.throw(TypeError);
      });
    });
  });

  describe("#multiply()", function () {
    it("Should multiply two positive numbers correctly", async () => {
      expect(calculator.multiply(5, 4)).to.equal(20);
    });

    it("Should multiply two negative numbers correctly", async () => {
      expect(calculator.multiply(-5, -4)).to.equal(20);
    });

    it("Should multiply negative & positive numbers correctly", async () => {
      expect(calculator.multiply(-2, 8)).to.equal(-16);
    });

    it("Should result 0 if no numbers are multiplied", async () => {
      expect(calculator.multiply()).to.equal(0); //тест падает, это баг, отсутствует обработчик для вывода корректного результата
    });

    // Тесты для умножения с участием дробных чисел
    const testDataMultFractional = [
      { input: [0.565, 3.42], expected: 1.9323 },
      { input: [-0.565, -3.42], expected: 1.9323 },
      { input: [-0.01, 3.33], expected: -0.0333 },
      { input: [0.565, -3.42], expected: -1.9323 },
      { input: [5.123, 2], expected: 10.246 },
      { input: [5.123, -2], expected: -10.246 },
      { input: [Number.MIN_VALUE, 2], expected: Number.MIN_VALUE * 2 },
      { input: [Number.MIN_VALUE, -2], expected: Number.MIN_VALUE * -2 },
    ];
    testDataMultFractional.forEach(({ input, expected }) => {
      it(`Should result multiply with fractional numbers ${input[0]} and ${input[1]} equals ${expected}`, async () => {
        expect(calculator.multiply(...input)).to.be.closeTo(expected, 0.0001);
      });
    });

    it("Should correctly multiply two minimum safe integers", async () => {
      expect(calculator.multiply(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).to.equal(
        Number.MIN_SAFE_INTEGER * Number.MIN_SAFE_INTEGER
      );
    });

    it("Should correctly multiply two maximum safe integers", async () => {
      expect(calculator.multiply(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).to.equal(
        Number.MAX_SAFE_INTEGER * Number.MAX_SAFE_INTEGER
      );
    });

    // Тесты для умножения на 0
    const testDataMultZero = [
      { input: [2, 0] },
      { input: [0, 6846153168416] },
      { input: [-18, 0] },
      { input: [0, 3.5] },
      { input: [Number.MIN_VALUE, 0] },
      { input: [Number.MAX_VALUE, 0] },
      { input: [Number.MIN_SAFE_INTEGER, 0] },
      { input: [Number.MAX_SAFE_INTEGER, 0] },
      { input: [12345678901234567, 0] },
    ];
    testDataMultZero.forEach((input) => {
      it(`Should return 0 if ${input.input[0]} multiply to ${input.input[1]}`, async () => {
        expect(calculator.multiply(...input.input)).to.equal(0);
      });
    });

    // Тесты для умножения на 1
    const testDataMultOne = [
      { input: [2, 1], expected: 2 },
      { input: [1, 6846153168416], expected: 6846153168416 },
      { input: [-18, 1], expected: -18 },
      { input: [1, -3.5], expected: -3.5 },
      { input: [Number.MIN_VALUE, 1], expected: Number.MIN_VALUE },
      { input: [Number.MAX_VALUE, 1], expected: Number.MAX_VALUE },
      { input: [Number.MIN_SAFE_INTEGER, 1], expected: Number.MIN_SAFE_INTEGER },
      { input: [Number.MAX_SAFE_INTEGER, 1], expected: Number.MAX_SAFE_INTEGER },
      { input: [12345678901234567, 1], expected: 12345678901234567 }, //тест падает, так как число назодится за пределами значения, без потери точности
    ];
    testDataMultOne.forEach(({ input, expected }) => {
      it(`Should return the same number if it multiply to 1, ${input[0]} * ${input[1]} = ${expected}`, async () => {
        expect(calculator.multiply(...input)).to.equal(expected);
      });
    });

    it("Should correctly multiply several numbers", async () => {
      expect(calculator.multiply(1, 5.5, 0.000001, 99999)).to.be.closeTo(0.5499945, 0.0000001);
      expect(calculator.multiply(-15, 18.5528746, 0, 55463169)).to.equal(0);
    });

    // Тесты для обработки умножения при передаче некорректных(нечисловых) аргуметов
    invalidValues.forEach((input) => {
      it(`Should result an Error if non-number arguments are provided for multiply, ${input.input[0]} and ${input.input[1]} equals TypeError`, async () => {
        //Тесты падают, так как в исходном коде нет валидации типов данных аргументов
        expect(() => calculator.multiply(...input.input)).to.throw(TypeError);
      });
    });
  });

  describe("#subtraction()", function () {
    // Тесты для вычитания целых чисел (отрицательных, положительных)
    const testDataSubtraction = [
      { input: [5, 3], expected: 2 },
      { input: [3, 5], expected: -2 },
      { input: [-5, 3], expected: -8 },
      { input: [5, -3], expected: 8 },
      { input: [-5, -3], expected: -2 },
    ];
    testDataSubtraction.forEach(({ input, expected }) => {
      it(`Should return ${expected} when subtracts ${input[0]} minus ${input[1]}`, async () => {
        expect(calculator.subtraction(...input)).to.equal(expected);
      });
    });

    it("Should return 0 if no any numbers are substracted", async () => {
      expect(calculator.subtraction()).to.equal(0); //возвращает NaN, в коде нет конвертора в 0 для вывода понятного юзеру результата
    });

    // Тесты для вычитания с 0
    const testDataSubtZero = [
      { input: [0, 856], expected: -856 },
      { input: [-4321, 0], expected: -4321 },
      { input: [3.5, 0], expected: 3.5 },
      { input: [0, -2.25], expected: 2.25 },
      { input: [0, 0], expected: 0 },
      { input: [Number.MIN_VALUE, 0], expected: Number.MIN_VALUE },
      { input: [Number.MAX_VALUE, 0], expected: Number.MAX_VALUE },
      { input: [Number.MIN_SAFE_INTEGER, 0], expected: Number.MIN_SAFE_INTEGER },
      { input: [Number.MAX_SAFE_INTEGER, 0], expected: Number.MAX_SAFE_INTEGER },
      { input: [12345678901234567, 0], expected: 12345678901234567 }, //тест падает, т.к. інтежер 17знаков находится за максимально допустимым значением без потери точности
    ];
    testDataSubtZero.forEach(({ input, expected }) => {
      it(`Should result subtraction ${input[0]} - ${input[1]} equals ${expected}`, async () => {
        expect(calculator.subtraction(...input)).to.equal(expected);
      });
    });

    // Тесты для вычитания с участием дробных чисел
    const testDataSubtFractional = [
      { input: [1, 123.456], expected: -122.456 },
      { input: [1, -123.456], expected: 124.456 },
      { input: [9.9999, 10], expected: -0.0001 },
      { input: [-9.9999, 10], expected: -19.9999 },
      { input: [0.565, 3.42], expected: -2.855 },
      { input: [-0.565, -3.42], expected: 2.855 },
      { input: [-0.565, 3.42], expected: -3.985 },
      { input: [0.565, -3.42], expected: 3.985 },
      { input: [Number.MIN_VALUE, 1], expected: Number.MIN_VALUE - 1 },
      { input: [Number.MIN_VALUE, -1], expected: Number.MIN_VALUE + 1 },
    ];
    testDataSubtFractional.forEach(({ input, expected }) => {
      it(`Should result subtraction fractional numbers ${input[0]} -  ${input[1]} equals ${expected}`, async () => {
        expect(calculator.subtraction(...input)).to.be.closeTo(expected, 0.0001);
      });
    });

    it("Should result subtraction of several numbers correctly", async () => {
      expect(calculator.subtraction(5, 18, -3, 1.555, -1, 600, 0)).to.equal(-610.555); //тест падает, баг, метод может прінімать только 2 аргумента, не может последовательно вычітать чісла
    });

    it("Should correctly handle subtraction numbers near the minimum value", function () {
      expect(calculator.subtraction(Number.MIN_SAFE_INTEGER, -1)).to.equal(Number.MIN_SAFE_INTEGER + 1);
    });

    it("Should correctly handle subtraction numbers near the maximum value", function () {
      expect(calculator.subtraction(Number.MAX_SAFE_INTEGER, 1)).to.equal(Number.MAX_SAFE_INTEGER - 1);
    });

    // Тесты для обработки вычитания при передаче некорректных(нечисловых) аргуметов
    invalidValues.forEach((input) => {
      it(`Should result an Error if non-number arguments are provided for substraction, ${input.input[0]} and ${input.input[1]} equals TypeError`, async () => {
        //Тесты падают, так как в исходном коде нет валидации типов данных аргументов
        expect(() => calculator.subtraction(...input.input)).to.throw(TypeError);
      });
    });
  });

  describe("#divide()", function () {
    // Тесты для проверкі деления целых чисел (отриц. и положит.) в случае деления без остатка
    const testDataDivideInt = [
      { input: [18, 6], expected: 3 },
      { input: [18, -6], expected: -3 },
      { input: [-18, 6], expected: -3 },
      { input: [-18, -6], expected: 3 },
      { input: [Number.MIN_SAFE_INTEGER, 2], expected: Number.MIN_SAFE_INTEGER / 2 },
      { input: [Number.MAX_SAFE_INTEGER, -2], expected: Number.MAX_SAFE_INTEGER / -2 },
    ];
    testDataDivideInt.forEach(({ input, expected }) => {
      it(`Should result exact division of integer numbers: ${input[0]} / ${input[1]} equals ${expected}`, async () => {
        expect(calculator.divide(...input)).to.equal(expected);
      });
    });

    // Тесты для проверкі деления целых чисел (отриц. и положит.) в случае деления с остатком
    const testDataDivide = [
      { input: [18, 8], expected: 2.25 },
      { input: [18, -8], expected: -2.25 },
      { input: [-18, 8], expected: -2.25 },
      { input: [-18, -8], expected: 2.25 },
    ];
    testDataDivide.forEach(({ input, expected }) => {
      it(`Should result devision with a reminder of integer numbers ${input[0]} / ${input[1]} equals ${expected}`, async () => {
        expect(calculator.divide(...input)).to.be.closeTo(expected, 0.01);
      });
    });

    // Тесты для проверкі деления на 1
    const testDataDivideOne = [
      { input: [5, 1], expected: 5 },
      { input: [-5, 1], expected: -5 },
      { input: [0.00001, 1], expected: 0.00001 },
      { input: [-0.00001, -1], expected: 0.00001 },
      { input: [Number.MIN_SAFE_INTEGER, 1], expected: Number.MIN_SAFE_INTEGER },
      { input: [Number.MAX_SAFE_INTEGER, 1], expected: Number.MAX_SAFE_INTEGER },
      { input: [Number.MIN_VALUE, 1], expected: Number.MIN_VALUE },
      { input: [Number.MAX_VALUE, 1], expected: Number.MAX_VALUE },
      { input: [12345678901234567, 1], expected: 12345678901234567 }, //тест падает, т.к. інтежер 17знаков находится за максимально допустимым значением без потери точности
    ];
    testDataDivideOne.forEach(({ input, expected }) => {
      it(`Should return the same number if it divides by 1:  ${input[0]} / ${input[1]} equals ${expected}`, async () => {
        expect(calculator.divide(...input)).to.be.closeTo(expected, 0.00001);
      });
    });

    // Тесты для проверкі деления числа самого на себя
    const testDataDivideIt = [
      { input: [5, 5] },
      { input: [-5, -5] },
      { input: [0.00001, 0.00001] },
      { input: [-0.00001, -0.00001] },
      { input: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER] },
      { input: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER] },
      { input: [Number.MIN_VALUE, Number.MIN_VALUE] },
      { input: [Number.MAX_VALUE, Number.MAX_VALUE] },
      { input: [12345678901234567, 12345678901234567] },
    ];
    testDataDivideIt.forEach((input) => {
      it(`Should return 1 if number divides by itself:  ${input.input[0]} / ${input.input[1]} = 1`, async () => {
        expect(calculator.divide(...input.input)).to.equal(1);
      });
    });

    // Тесты для проверкі деления на 0
    const testDataDivideZero = [
      { input: [1, 0] },
      { input: [-1, 0] },
      { input: [Number.MIN_SAFE_INTEGER, 0] },
      { input: [Number.MAX_SAFE_INTEGER, 0] },
      { input: [Number.MIN_VALUE, 0] },
      { input: [Number.MAX_VALUE, 0] },
      { input: [12345678901234567, 0] },
    ];
    testDataDivideZero.forEach(({ input }) => {
      it(`Should correctly handle division by zero providing an Error`, async () => {
        expect(calculator.divide(...input.input)).to.throw(TypeError);
      });
    });

    it("Should divide several numbers correctly", async () => {
      expect(calculator.divide(1000, 1, 2.5, 0.000001, 80000)).to.equal(5000); //тест падает, баг, метод может выполнять корректное деление только с 2мя аргументами, не может последовательно делить несколько чисел
    });

    // Тесты для обработки деления при передаче некорректных(нечисловых) аргуметов
    invalidValues.forEach((input) => {
      it(`Should result an Error if non-number arguments are provided for dividing, ${input.input[0]} / ${input.input[1]} equals TypeError`, async () => {
        //Тесты падают, так как в исходном коде нет валидации типов данных аргументов
        expect(() => calculator.divide(...input.input)).to.throw(TypeError);
      });
    });
  });

  describe("#exponentiation()", function () {
    // Тесты для проверки возведения в квадрат целых чисел (положительных, отриц, максимального и мин .целых чисел)
    const testDataExpInt = [
      { input: 5, expected: 25 },
      { input: -5, expected: 25 },
      { input: Number.MIN_SAFE_INTEGER, expected: Number.MIN_SAFE_INTEGER ** 2 },
      { input: -Number.MIN_SAFE_INTEGER, expected: Number.MIN_SAFE_INTEGER ** 2 },
      { input: Number.MAX_SAFE_INTEGER, expected: Number.MAX_SAFE_INTEGER ** 2 },
      { input: -Number.MAX_SAFE_INTEGER, expected: Number.MAX_SAFE_INTEGER ** 2 },
    ];
    testDataExpInt.forEach(({ input, expected }) => {
      it(`Should return the square of integer number: (${input})**2 equals ${expected}`, async () => {
        expect(calculator.exponentiation(input)).to.equal(expected);
      });
    });

    // Тесты для проверки возведения в квадрат дробных чисел (положительных, отриц, min&max)
    const testDataExpFract = [
      { input: 1.2, expected: 1.44 },
      { input: -1.2, expected: 1.44 },
      { input: Number.MIN_VALUE, expected: Number.MIN_VALUE ** 2 },
      { input: -Number.MIN_VALUE, expected: Number.MIN_VALUE ** 2 },
      { input: Number.MAX_VALUE, expected: Number.MAX_VALUE ** 2 },
      { input: -Number.MAX_VALUE, expected: Number.MAX_VALUE ** 2 },
    ];
    testDataExpFract.forEach(({ input, expected }) => {
      it(`Should return the square of fractional number: (${input})**2 equals ${expected}`, async () => {
        expect(calculator.exponentiation(input)).to.be.closeTo(expected, 0.00001);
      });
    });

    it("Should return 0 when the exponent is 0 ", async () => {
      expect(calculator.exponentiation(0)).to.equal(0);
    });

    it("Should return 1 when the exponent is 1 ", async () => {
      expect(calculator.exponentiation(1)).to.equal(1);
    });

    // Тесты для обработки возведения в квадрат при передаче некорректных(нечисловых) аргуметов
    invalidValues.forEach((input) => {
      it(`Should result an Error if non-number arguments are provided for exponentiation, ${input.input[0]}**2 equals TypeError`, async () => {
        //Тесты падают, так как в исходном коде нет валидации типов данных аргументов
        expect(() => calculator.exponentiation(input)).to.throw(TypeError);
      });
    });
  });
});
