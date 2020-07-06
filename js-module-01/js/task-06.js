"use script";
let input;
let total = 0;

do {
  input = prompt("Введите чило");
  input = Number(input);
  total += input;
} while (input !== 0);
alert(`Общая сумма чисел равна ${total}`);
