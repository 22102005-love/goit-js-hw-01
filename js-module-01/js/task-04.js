"use script";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let droidsAmount = prompt("Сколько дроидов Вы хотите купить?");

if (droidsAmount === null) {
  console.log("Отменено пользователем!");
} else {
  droidsAmount = Number(droidsAmount);
  totalPrice = pricePerDroid * droidsAmount;
  console.log(`Сумма покупки ${totalPrice} кредитов`);
  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    credits = credits - totalPrice;
    console.log(
      `Вы купили ${droidsAmount} дроидов, на счету осталось ${credits} кредитов`
    );
  }
}
