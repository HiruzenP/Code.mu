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
let number = 53;
let number2 = number %10; 
let number1 = (number - number2)/10
let sum = number1 + number2 

if (number > 99 || number < 0){
	console.log('Неверное число');
} else if (sum < 10){
	console.log('Сумма цифр однозначна');
} else if (sum > 10){
	console.log('Сумма цифр Двузначна');
}
//Конструкция switch-case в JavaScript
let lang = 'de';

switch (lang){
	case 'ru':
		console.log('рус');
	break;
	case 'en':
		console.log('анг');
	break;
	case 'de':
		console.log('нем');
	break;
	default:
		console.log('язык не поддерживается');
	break;
}
//Тернарный оператор в JavaScript
let numbers = 17;
let result = numbers >= 0 ? '1' : '2';
console.log(result);

//Логические операции в JavaScript
//№1
let a1 = 2 * (3 - 1);
let b1 = 6 - 2;

console.log(a1 == b1);
//№2
let a2 = 5 * (7 - 4);
let b2 = 1 + 2 + 7;

console.log(a2 > b2);
//№3
let a3 = 2 ** 4;
let b3 = 4 ** 2;

console.log(a3 != b3);
//Функция confirm в JavaScript
// let ok = confirm('Вам есть 18?');

// if (ok) {
// 	alert('На этой странице есть материал предназначенный строго для взрослых ');
// } else {
// 	alert('Доступ к этой странице несовершенно летним запрещен');
// }
//Область видимости переменных в if-else в JavaScript
let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
//Нюансы области видимости переменных в конструкциях if-else в JavaScript
let ages = 17;
let adults;

if (ages >= 18) {
	adults = true;
} else {
	adults = false;
}

console.log(adults);
//
let age2 = 17;
let res2;

if (age2 >= 18) {
	if (age2 <= 23) {
		res2 = 'от 18 до 23';
	} else {
		res2 = 'больше 23';
	}
} else {
	res2 = 'меньше 18';
}

console.log(res2);
//
let age3 = 19;
let res3;

if (age3 >= 18) {
	if (age3 <= 23) {
		res3 = 'от 18 до 23';
	} else {
		res3 = 'больше 23';
	}
} else {
	res3 = 'меньше 18';
}

console.log(res3);
//Проверка частей часа через if-else в JavaScript
let min = 50;

if (min >= 0 && min <= 19) {
	console.log('1 треть');
}

if (min >= 20 && min <= 39) {
	console.log('2 треть');
}

if (min >= 40 && min <= 59) {
	console.log('3 треть');
}
//Проверка длины строк и массивов в JavaScript
let arra = [4 , 5 , 7 ];

if (arra.length == 3){
	console.log(arra[0] + arra[1] + arra[2])
} else {
	console.log('В массиве больше или меньше 3 элементов')
}
//Проверка символов строки в JavaScript
//1
let str1 = 'avcsd';

if (str1[0] == 'a') {
	console.log('Строка начинается с символа "a"');
}
//2
let str2 = 'avcsx';

if (str2[str2.length - 1] == 'x') {
	console.log('Строка заканчивается символом "x"');
}
//3
let str3 = 'avcsd';

if (str3[0] == 'a' || str3[0] == 'b') {
	console.log('Строка начинается с символа "a" или "b"');
}
//Проверка цифр числа в JavaScript
let numbs = 12340;
let last = String(numbs);

if (last[last.length - 1] == 0){
	console.log('+++');
} else {
	console.log('---');
}
//
let numbs2 = 12144
let last2 =	String(numbs2);

if (last2[last.length - 1] % 2 == 0){
	console.log("Число чётное");
} else {
	console.log("Число нечётное");
}
//Проверка остатка от деления в JavaScript
let a = 9;
let b = 2;
let rest = a % b;

if (rest === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ' + rest);
}
//
let a11 = 9;
let b22 = 3;
let rest33 = a11 % b22;

if (rest33 === 0) {
	console.log('делится нацело');
} else {
	console.log('делится с остатком ' + rest33);
}
//Поиск ошибок в коде с условиями JavaScript
let numb1 = 1;
let numb2 = 2;

if (numb1 + numb2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}
//
let nums1 = '1';
let nums2 = '2';

if (Number(nums1) + Number(nums2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}
//
let numbers1 = 123;

if (String(numbers1)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//
let numbm = 123;
let first = String(numbm)[0];

if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}
//
let numbms = 12;

if (String(numbms).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}
//
let numb = '123033'; 

let sum1 = Number(numb[0]) + Number(numb[1]) + Number(numb[2]);
let sum2 = Number(numb[3]) + Number(numb[4]) + Number(numb[5]);
if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
//Практика на условия if-else в JavaScrip
let month = 11;

if (month <= 2 || month == 12){
	console.log('Зима');
} else if (month >= 3 && !(month > 5)){
	console.log('Весна');
} else if (month >= 6 && !(month > 8)){
	console.log('Лето');
} else if (month >= 9 && !(month > 11)){
	console.log('Осень');
}
//
let strr = 'abcde';

if (strr[0] == 'a'){
	console.log('Первый символ это "a"')
} else {
	console.log('Первый символ не "a"')
}
//
let chislo = 12345;

if (String(chislo)[0] < 0 || !(String(chislo)[0] >= 3)){
	console.log('первым символом этого числа является цифра 1, 2 или 3')
}
//
let thre = 452;
let sumb = Number(String(thre)[0]) + Number(String(thre)[1]) + Number(String(thre)[2]);
console.log(sumb)
//
let shest = '452263'; 

let summa1 = Number(shest[0]) + Number(shest[1]) + Number(shest[2]);
let summa2 = Number(shest[3]) + Number(shest[4]) + Number(shest[5]);
if (summa1 == summa2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}
//
