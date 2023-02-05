"use strict";
//Объекты в JavaScript
let obj = {1 : 'Понедельник' , 2 : 'Вторник' , 3: 'Среда', 4: 'Четверг' , 5: 'Пятница' , 6: 'Суббота' , 7: 'Воскресенье'};
console.log(obj[1],obj[2],obj[3],obj[4],obj[5],obj[6],obj[7]);
//Вывод всего объекта в JavaScript
let obj2 = {1 : 'Январь' , 2 : 'Февраль' , 3: 'Март', 4: 'Апрель' , 
5: 'Май' , 6: 'Июнь' , 7: 'Июль',8: 'Август', 
9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'};
console.log(obj2);
//Строковые ключи объектов в JavaScript
let user = {name:'Никита', surname:'Филиппов', patronymic:'Сергеевич',vsakoe:'s123', eie : 'dsa'};
console.log(user['surname'] , user['name'] , user['patronymic']);
//
let date = {year: '2023', month: '02', day:'04'}
console.log(date['year'] + '-' + date['month'] + '-' + date['day'])
//Ограничения на ключи объектов в JavaScript
let obj3 = {'1a': 1,'b2': 2,'b-b': 3,'d 4': 4,'e5': 5};
console.log(obj3['1a']);
console.log(obj3.b2);
console.log(obj3['b-b']);
console.log(obj3['d 4']);
console.log(obj3.e5);
//Изменение элементов объектов в JavaScript
let obj4 = {x: 1, y: 2, z: 3};
obj4.x **= 2
obj4.y **= 2
obj4.z **= 2
console.log(obj4);
//Добавление элементов в объекты в JavaScript
let obj5 = {};
obj5['a'] = 123;
obj5['b'] = 324;
obj5['c'] = 543;
console.log(obj5);
//Неупорядоченность объектов в JavaScript
let obj6 = {7: 'a', 50: 
	'b', 23: 'c'}; 
//Массив ключей объекта в JavaScript
let obj7 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj7);
console.log(keys);
//
let obj8 = {x: 1, y: 2, z: 3};
let keys1 = Object.keys(obj8);
console.log(Object.keys(obj8).length);
//
let obj9 = {x: 1, y: 2, z: 3};
let key2 = 'y'
console.log(obj9[key2]);
//
//Ошибка обращения к элементу по ключу в JavaScript
//1
let obj10 = {x: 1, y: 2, z: 3};
console.log(obj10['x']);
//2
let obj11 = {x: 1, y: 2, z: 3};
let key = 'x';
console.log(obj11[key]);
//
//Ошибка обращения к свойству объекта в JavaScript
//
let obj12 = {x: 1, y: 2, z: 3};
let prop = 'x';
console.log(obj12[prop]);
//
let obj13 = {x: 1, y: 2, z: 3};
let prop1 = 'x';
console.log(obj13[prop1]);
//
//Вычисляемые свойства в JavaScript
//
let key3 = 'x';
let obj14 = {
	[key3]: 1,
	y: 2,
	z: 3
};
console.log(obj14);
//
let keyses1 = 'x';
let keyses2 = 'y';
let keyses3 = 'z';
let obj15 = {
	[keyses1]: 1,
	[keyses2]: 2,
	[keyses3]: 3
};
console.log(obj15);
//Оператор in в JavaScript
let obj16 = {x: 1, y: 2, z: 3};
console.log('x' in obj16);
console.log('w' in obj16);
//Оператор delete в JavaScript
let obj17 = {x: 1, y: 2, z: 3};
delete obj17.x;
console.log('x' in obj17);
//
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];
console.log(res);
//
//Поиск ошибок в коде с объектами JavaScript
//1
let obj18 = {x: 1, y: 2, z: 3};
console.log(obj18.x);
//2
let obj19 = {x: 1, y: 2, z: 3};
let key4 = 'x';
console.log(obj19[key4]);
//3
let obj20 = {x: 1, y: 2, z: 3};
let sum = obj20.x + obj20.y + obj20.z; 
console.log(sum);
//4
let obj21 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj21).length);