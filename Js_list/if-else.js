//Операторы больше и меньше в JavaScript
let test = 10;
if (test > 0){
    console.log('+++');
} else {
    console.log('---');
}
//
let test1 = 10;
if (test1 < 0){
    console.log('+++');
} else {
    console.log('---');
}
//
let test2 = 10;
if (test2 >= 0){
    console.log('+++');
} else {
    console.log('---');
}
//
let test3 = 10;
if (test3 <= 0){
    console.log('+++');
} else {
    console.log('---');
}
//Проверка на равенство в JavaScript
let test4 = 10;
if (test4 == 10){
    console.log('+++');
} else {
    console.log('---');
}
//Проверка на неравенство в JavaScript
let test5 = 10;
if (test5 != 10){
    console.log('+++');
} else {
    console.log('---');
}
//Сравнение переменных в JavaScript
let test6 = 1;
let test7 = 2;
if (test6 > test7) {
	console.log('Значение больше'); 
} else {
	console.log('Значение меньше');
}
//
let test8 = 1;
let test9 = 2;
if (test8 == test9) {
	console.log('Значения равны'); 
} else {
	console.log('Значения неравны');
}
//Равенство строк в JavaScript
let test10 = 'avc';
let test11 = 'bfa';
if (test10 == test11) {
	console.log('Строки равны'); 
} else {
	console.log('Строки неравны');
}
//
let test12 = '123';
let test13 = 123;
if (test12 == test13) {
	console.log('Значения равны'); 
} else {
	console.log('Значения неравны');
}
//Логическое И в JavaScript
let num = 3;
if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}
//
let num1 = 3;
if (num1 >= 10 && num1 <= 20) {
	console.log('+++');
} else {
	console.log('---');
}
//
let num2 = 2;
let num3 = 3;
if (num2 <= 1 && num3 >= 3) {
	console.log('+++');
} else {
	console.log('---');
}
//Инвертирование логических выражений в JavaScript
let num4 = 2;
let num5 = 3;
if (!(num4 >= 0 && num5 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}
//Условия с булевыми значениями в JavaScript
let test14 = true;
if (test14 === true) {
	console.log('+++');
} else {
	console.log('---');
}
if (test14 === false) {
	console.log('+++');
} else {
	console.log('---');
}
//Сокращенная форма проверки на истину в JavaScript
let test15 = true;
if (test15) {
	console.log('+++');
} else {
	console.log('---');
}
//
let test16 = true;
if (!test16) {
	console.log('+++');
} else {
	console.log('---');
}
let test17 = true;
//
if (!test17) {
	console.log('+++');
} else {
	console.log('---');
}
//
let test18 = true;

if (test18) {
	console.log('+++');
} else {
	console.log('---');
}
//Сложные условия в сокращенной форме в JavaScript
let test19 = true;
let test20 = true;
if (test19 && test20 ) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test21 = true;
let test22 = true;
if (test21 && !test22) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test23 = true;
let test24 = true;
if (!test23 && !test24) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test25 = true;
let test26 = true;
if (!test25 && test26) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test27 = true;
let test28 = true;
let test29 = true;
if (test27 && test28 && test29) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test30 = true;
let test31 = true;
let test32 = true;
if (test30 || test31 && test32 ) { 
	console.log('+++');
} else {
	console.log('---');
}
//
let test33 = true;
let test34 = true;
let test35 = true;

if (test33 || !test34 && !test35) { 
	console.log('+++');
} else {
	console.log('---');
}
//Необязательность конструкции else в JavaScript
let test36 = 10;

if (test36 == 10) {
	console.log('yes');
}
//Необязательность фигурных скобок в JavaScript
let test37 = 1;
if (test37 > 0) console.log('+++');else console.log('---');
//
if (test37 > 0) console.log('+++');
//Конструкция else if в JavaScript
let day = 19

if (day <= 10){
	console.log('Первая декада')
} else if (day >= 11 && day <= 20){
	console.log('Вторая декада')
} else if (day >= 21 && day <= 31){
	console.log('Третья декада')
} else if (day > 31 || day < 0){
	console.log('Ошибка.Неверное число')
}
//Вложенные конструкции if-else в JavaScript
let number = 55;
let number2 = number %10; 
let number1 = (number - number2)/10
let sum = number1 + number2 

if (number > 99 || number < 0){
	console.log('Неверное число')
} else if (sum < 10){
	console.log('Сумма цифр однозначна')
} else if (sum > 10){
	console.log('Сумма цифр Двузначна')
}
//



