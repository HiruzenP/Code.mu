//Массивы в JavaScript
let arr = [1, 2, 3];
alert(arr);
console.log(arr);
//
let arr1 = ['ar','an','ae'];
alert(arr1);
console.log(arr1);
//Получение элементов массивов в JavaScript
let arr2 = [1, 2, 3];
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);
//
let arr3 = [1, 2, 3];
alert(arr3[0]+arr3[1]+arr3[2]);
//
let arr4 = ['a', 'b', 'c', 'd'];
alert(arr4[0] + '+' + arr4[1]+ '+' +arr4[2] + '+' + arr4[3]);
//Длина массива в JavaScript
let arr5 = ['a', 'b', 'c'];
console.log(arr5.length) ;
//
let arr6 = ['a','b','c']
console.log(arr6[arr6.length - 1])
//Изменение элементов массива в JavaScript
let arr7 = ['a', 'b', 'c'];
arr7[0] = 1;
arr7[1] = -2;
arr7[2] = -3;
console.log(arr7); 
//Перезапись элементов
let arr8 = [1,2,3];
arr8[0] += 3;
arr8[1] += 3;
arr8[2] += 3;
console.log(arr8);
//Инкремент и декремент
let arr9 = [1,2,3];
++arr9[0];
++arr9[1];
++arr9[2];
console.log(arr9);
//Добавление элементов по ключам JavaScript
let arr10 = [];
arr10[0] = 1;
arr10[1] = 2;
arr10[2] = 3;
console.log(arr10);
//
let arr11 = [1,2,3];
arr11[3] = 4;
arr11[4] = 5;
console.log(arr11);
//Разреженные массивы в JavaScript
let arr12 = [];
arr12[3] = 'a';
arr12[8] = 'b';
console.log(arr12.length)
//Добавление элементов через push в JavaScript
let arr13 = [];
arr13.push(1);
arr13.push(2);
arr13.push(3);
console.log(arr13)
//
let arr14 = [1, 2, 3];
arr14.push(4);
arr14.push(5);
console.log(arr14);
//Ключи массивов из переменных в JavaScript
let arr15 = ['a', 'b', 'c'];
let key = 2;
console.log(arr15[key])
//
let arr16 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr16[key1] + arr16[key2])
//Оператор delete в массивах в JavaScript
let arr17 = ['a', 'b', 'c', 'd', 'e']; 
delete arr17[4];
delete arr17[2];
console.log(arr17.length)
//Поиск ошибок в коде с массивами JavaScript
let arr18 = [1, 2, 3, 4, 5];
console.log(arr18[arr18.length-1]);
//
let arr19 = [1, 2, 3, 4, 5];
console.log(arr19[0] + arr19[1] + arr19[2] + arr19[3] + arr19[4]); 
//
let arr20 = [1, 2, 3, 4, 5];
console.log(arr20.length);
//
let arr21 = [1, 2, 3, 4, 5];
console.log(arr21.length);