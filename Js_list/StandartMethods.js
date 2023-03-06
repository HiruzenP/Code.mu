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