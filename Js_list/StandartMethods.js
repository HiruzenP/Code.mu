//Математические методы в JavaScript Работа со степенью и корнем
console.log(Math.pow(2,10))
//
console.log(Math.sqrt(245))
//
arr = [4, 2, 5, 19, 13, 0, 10]
sumarr = 0
for (elem of arr){
    sumarr+= Math.pow(elem,3);
}
console.log(Math.sqrt(sumarr))
//Работа с функциями округления
console.log(Math.round(Math.sqrt(379)))
console.log(Math.sqrt(379).toFixed(1))
console.log(Math.sqrt(379).toFixed(2))
//
obj = {floor: '',ceil: '',}
obj.floor = Math.floor(Math.sqrt(579))
obj.ceil = Math.ceil(Math.sqrt(578))
console.log(obj)
//Нахождение максимального и минимального числа
console.log(Math.max(4, -2, 5, 19, -130, 0, 10))
console.log(Math.min(4, -2, 5, 19, -130, 0, 10))
//
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));
//
array = [];
for (i = 0 ; i < 10 ; i++){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    array.push(getRandomInt(1,100))
}
console.log(array)
//
let a = -5
let b = -7
console.log(Math.abs(a) - Math.abs(b))
//Строковые методы JavaScript Работа с регистром символов
str = 'js'
console.log(str.toUpperCase())
//
str1 = 'JS'
console.log(str1.toLowerCase())
//Работа с substr, substring, slice
string = 'я учу javascript!'
sub = string.substr(2,3)
console.log(sub)
//
sub = string.substring(2,5)
console.log(sub)
//
sub = string.slice(2,5)
console.log(sub)
//Работа с indexOf
str = 'abcde';
console.log(str.indexOf('c'))
//
if (str.indexOf('a') >= 0){
    console.log('Символ есть')
}else{
    console.log('Символа нет')
} 
//
if (str.indexOf('a') == 0){
    console.log('Строка начинается с этого символа')
}else{
    console.log('Строка не начинается с этого символа')
} 
//
if (str.lastIndexOf('a') == str.length-1){
    console.log('Строка заканчивается с этого символа')
}else{
    console.log('Строка не заканчивается с этого символа')
} 
//
if (str.indexOf('http://') == 0){
    console.log('Строка начинается с этого ')
}else{
    console.log('Строка не начинается с этого ')
}
//Работа с startsWith, endsWith
str1 = 'http://code.mu/ru/javascript/book/prime/inbuilt/string/.html'
console.log(str1.startsWith('http://'));
console.log(str1.endsWith('.html'))
//
str2 = '1-2-3-4-5';
arr2 = str2.split('-');
console.log(arr2)
//
str3 = '12345';
arr3 = str3.split('')
console.log(arr3)
//Метод join
arr4 = [1,2,3,4,5];
str4 = arr4.join('-');

console.log(str4);
//Работа с push, unshift
arr5 = [1, 2, 3];
arr5.push(4,5,6)
console.log(arr5)
//
arr6 = [1, 2, 3];
arr6.unshift(4,5,6)
console.log(arr6)
//
arr7 = [1,2,3,4,5];
newarr7 = arr7.slice(0,3)
console.log(newarr7)
//
arr8 = [1,2,3,4,5];
newarr8 = arr8.slice(3,5)
console.log(newarr8)
//Работа с splice
arr9 = [1,2,3,4,5];
arr9.splice(1,2)
console.log(arr9)
//
arr10 = [1,2,3,4,5];
arr10.splice(3,0,'a', 'b', 'c')
console.log(arr10)
//
arr11 = [1,2,3,4,5];
arr11.splice(1,0,'a', 'b')
arr11.splice(arr11.indexOf(4)+1,0, 'c');
arr11.splice(arr11.indexOf(5)+1,0, 'e');
console.log(arr11)
//
arr12 = [1,2,3,4,5]
pos = arr12.indexOf(3);
console.log(pos)
//
str = 'london';
console.log(str.slice(0,5)+str.slice(5).toUpperCase())
//
console.log(str.slice(0,2).toUpperCase()+str.slice(2))
//
str = 'London'
console.log(str.slice(0,1).toLowerCase()+str.slice(1))