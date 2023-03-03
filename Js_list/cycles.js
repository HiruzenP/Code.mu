for (let i = 1; i <= 100 ; i++) {
	console.log(i);
}
//
for (let i = 11; i <= 33 ; i++) {
	console.log(i);
}
//
for (let i = 0; i <= 100; i +=2){
    if (i % 2 == 0){
        console.log(i)
    }
}
//
for (let i = 0; i <= 99; i++){
    if (i % 2 == 1){
        console.log(i)
    }
}
//
for (let i = 100; i > 0 ; i--){
    console.log(i);
}
//
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}
//
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(key);
}
//
let obj1 = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(obj1[key]);
}
//
num = 1;
while (num <= 100){
    console.log(num);
    num++
}
//
num1 = 11;
while (num1 <= 33){
    console.log(num1);
    num1++
}
//
num2 = 23;
while (num2 <= 1000){
    console.log(num2);
    num2*=3
}
//
let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}
//
let arr3 = ['a', 'b', 'c', 'd', 'e'];
for (i = 1 ; i < arr3.length-1; i++){
    console.log(arr3[i])
}
//
let arr4 = ['a', 'b', 'c', 'd', 'e'];
for (i = arr4.length-1; i >= 0; i--){
    console.log(arr4[i]);
}
//
let arr5 = ['a', 'b', 'c', 'd', 'e'];
//		
for (i = 0; i < arr5.length; i++) {
	console.log(arr5[i]);
}
let arr6 = [2, 5, 9, 15, 1, 4];
for (elem of arr6){
    if ( elem > 3 && elem < 10){
        console.log(elem);
    }
}
//
let obj2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (key in obj2){
    if (obj2[key] % 2 == 1){
        console.log(obj2[key])
    }
}
//
let res = 0;
for (i = 2 ; i <= 100 ; i++){
    if (i % 2 == 0){
        res += i
    }
}
console.log(res)
//
let res2 = 0;
for (i = 1 ; i <= 99 ; i++){
    if (i % 2 == 1){
        res2 += i
    }
}
console.log(res2)
//
let res3 = 1;
for (i = 1 ; i <= 20 ; i++){
    if (i % 2 == 0){
        res3 *= i
    }
}
console.log(res3)
//
let arr7 = [2, 5, 9, 3, 1, 4];
let res7 = 0;
for(elem of arr7){
    res7+=elem;
}
console.log(res7);
//
let arr8 = [2, 5, 9, 3, 1, 4];
let res8 = 0;
for(elem of arr8){
    if (elem % 2 == 0){
        res8+=elem;
    }
}
console.log(res8);
//
let arr9 = [2, 5, 9, 3, 1, 4];
let res9 = 0;
for (elem of arr9){
    elem *= elem;
    res9 += elem;
}
console.log(res9);
//
let arr10 = [2, 5, 9, 3, 1, 4];
let res10 = 1;
for (elem of arr10){
    res10*=elem;
}
console.log(res10);
//
let str ='';

for (i = 1; i <= 5; i++){
    str += '-';
}
console.log(str)
//
let str1 ='';

for (i = 1; i <= 9; i++){
    str1+= i
}
console.log(str1)
//
let str2 ='';

for (i = 9; i >= 1 ; i--){
    str2+=i;
}
console.log(str2)
//
let str3 ='';

for (i = 1 ; i <= 9 ; i++){
    str3 +='-';
    str3 +=i
}
console.log(str3+'-')
//
for (i = 10; i <= 1000; i++){
    let str = String(i);
    console.log(str[0])
}
//
for (i = 10; i <= 1000; i++){
    let str = String(i);
    console.log(Number(str[0]) + Number(str[1]))
}
//
for (i = 10; i <= 1000; i++){
    let str = String(i);
    if (str[0] == 1){
        console.log(str);
    }
}
//
for (i = 10; i <= 1000; i++){
    let str = String(i);
    if (Number(str[0]) + Number(str[1])==5){
        console.log(str)
    }
}
//
let arr11 = [3,4,7,0,3,5]

for (elem of arr11){
    if (elem == 0){
        break;
    }
    console.log(elem)
}
//
let arr12 = [2,4,8,-2,1,3]
let result = 0;
for (elem of arr12){
    if (elem < 0){
        break;
    }
    result+=elem;  
}
console.log(result)  
//
let arr13 = [1,5,2,3,5,6]
let k = 1;
for (elem of arr13){
    if (elem == 3){
        break;
    }
    k++
}
console.log(k)
//
sum = 0;
for (i = 0; i < 100; i++){
    if (sum > 100){
        break;
    }
    if (i % 2 == 0){
        sum+=i
    }
}
console.log(i)
//
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}
//
for (let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++ ){
        document.write(String(i) + String(j) + " ");
        }
}
//
let arr14 = [];

for (let i = 1; i <= 10; i++) {
	arr14.push(i);
}
console.log(arr14)
//
let arr15 = [];

for (let i = 1; i <= 10; i++) {
	arr15.push('x');
}
console.log(arr15)
//
let arr17 = []
let arr16 = [-5,-3,-2,-1,0,1,5,7]
for (elem of arr16){
    if (elem > 0){
        arr17.push(elem);
    } 
}
console.log(arr17)
//
let arr18 = [1,5,7,4]
for (i = 0; i < arr18.length;i++){
    arr18[i]**=2
}
console.log(arr18)
//
let arr19 = [1,5,7,4]
for (i = 0; i < arr19.length;i++){
    arr19[i]-=1
}
console.log(arr19)
//
let arr20 = [1,5,7,4]
for (i = 0; i < arr20.length;i++){
    arr20[i]+=10
}
console.log(arr20)
//
let obj22 = {};
let arr21 = ['пн', 'вт', 'ср', 'чт', 
	'пт', 'сб', 'вс']; 
let arr22 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i <= arr22.length-1; i++) {
    obj22[arr21[i]] = arr22[i];
}
console.log(obj22);
//
let obj23 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj24 = {}
for (key in obj23){
    if (obj23[key]%2 == 0){
    obj24[key] = obj23[key]
    } 
}
console.log(obj24)
//
let obj25 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj26 = {}
for (key in obj25){
    obj26[obj25[key]] = key
}
console.log(obj26);
//
let obj27 = {x: 1, y: 2, z: 3};
for(key in obj27){
    obj27[key] **=2
}
console.log(obj27)
//
let obj28 = {x: 1, y: 2, z: 3};
for(key in obj28){
    obj28[key]+=1
}
console.log(obj28)
//
let arrr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;
for (elem of arrr){
    if (elem == 'c'){
        flag = true;
        break;
    }
}
if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}
//
let n = 20;

for (i = 0; i <= n; i++) { // 
  for (j = 0; j <= i; j++) { 
    if (i % j == 0) continue;        
  }
}