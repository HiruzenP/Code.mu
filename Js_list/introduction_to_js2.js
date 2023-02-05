
//Преобразование к числу в JavaScript
let nums1 = '10',nums2 = 20;
console.log(Number(nums1)+Number(nums2));
//
let nums3 = '2', nums4 = '3';
console.log(Number(nums3)+Number(nums4));
//Выделение чисел в JavaScript
let nump1 = parseInt('5px'), nump2 = parseInt('6px');
console.log(nump1 + nump2);
//
let nump3 = parseFloat('5.5px'), nump4 = parseFloat('6.25px')
console.log(nump3 + nump4 + 'px')
//
let numstr1 = 1;
let numstr2 = 2;
console.log(String(numstr1) + String(numstr2)); 
//
let num = 23513;
console.log(String(num).length);
//
let numlen1 = 2323, numlen2 = 2435;
console.log((String(numlen1).length) + (String(numlen2).length));
//Преобразование к логическому типу в JavaScript
let str = 'abcde';
alert(str[0]);
alert(str[2]);
alert(str[4]);
//
let numstring0 = 0, numstring1 = 1, numstring2 = 2, numstring3 = 3, numstring4 = 4;
alert(str[numstring4] + str[numstring3] + str[numstring2] + str[numstring1] + str[numstring0]);
//
let nstr=2;
alert(str[nstr] + ' ' + nstr);
//Последний символ строки в JavaScript
alert((str[str.length - 1]))
alert(str[str.length - 2])
alert(str[str.length - 3])
//Строки с цифрами в JavaScript
let test = '12345'; 
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
//
let Chislo = String(12345);
console.log(Number(Chislo[0])+Number(Chislo[1])+Number(Chislo[2])+Number(Chislo[3])+Number(Chislo[4]))
console.log(Number(Chislo[0])*Number(Chislo[1])*Number(Chislo[2])*Number(Chislo[3])*Number(Chislo[4]))
console.log((Chislo[4]) + (Chislo[3]) + (Chislo[2]) + (Chislo[1]) + (Chislo[0]))
//Сокращенные операции
let numm = 47;
numm  += 7;
numm  -= 18;
numm  *= 10;
numm  /= 15;
alert(numm);
//Операции инкремента и декремента в JavaScript
let numm1 = 10;
numm1++;
numm1++; 
numm1--; 
alert(numm1);
//Неточные вычисления в JavaScript
let a1 = 0.1 * 0.2;
alert(+a1.toFixed(2))
//
let a2 = 0.3 - 0.1;
alert(+a2.toFixed(2))
//Функция prompt в JavaScript
let years = prompt('Сколько вам лет?')
alert('Ваш возраст' + ' ' + years)
//
let numss1 = prompt('Введите первое число');
let numss2 = prompt('Введите второе число');
alert(Number(numss1) + Number(numss2));
//
let cube = prompt('Введите сторону квадрата');
alert(cube**2);
//
let rectangle = prompt('Введите первую сторону прямоугольника: '), rectangle2 = prompt('Введите вторую сторону прямоугольника: ')
alert('Периметр прямоугольника равен: ' + (Number(rectangle*2) + Number(rectangle2*2)))
//Вывод текста в документ в JavaScript
let text = 'какой нибудь текст'
document.write(text);	
//
document.write('<br>'+'<em>' + text + '</em>'+ '</br>')
//
document.write('1<br>')
document.write('2<br>')
document.write('3<br>')
document.write('4<br>')
document.write('5<br>')
//
let numps1 = 1 , numps2 = 2;
console.log('сумма: ' + (numps1 + numps2));
//
let aa = 1;
let bb = 2;
console.log(aa + bb);
//
let numa = '123';
let sum = Number(numa[0]) + Number(numa[1]) + Number(numa[2]);
console.log(sum);
//
let numq = '123';
console.log(numq[0]);
//
let a = 0;
console.log(++a);
//
let nume = 123;
console.log(String(nume).length);
//
let aa1 = 24 * 60 * 60;
console.log(aa1);
//
let numr = 123;
let stra = String(numr);
console.log(stra.length);
//
let numr2 = 123;
let stre = String(numr2);
console.log(stre[stre.length-1]);
//
let numr3 = 123;
let stre2 = String(numr3);
console.log(stre2.length);
//
let numr4 = 123;
let stre3 = String(numr4);
console.log(stre3[stre3.length-1]);
//
let aaa = '123';
let bbb = '456';
let sss = Number(aaa) + Number(bbb);
console.log(sss);
//
let aaa1 = 1;
let bbb2 = 2;
let sss3 = 3;
console.log(aaa1 + bbb2 + sss3);
//
alert(24*60*60)
//
alert(30*24*60*60)
//
alert(365*24*60*60)
//
alert(24*60)
//
alert(365*24*60)
//
alert(1024*1024)
//
alert(1024*1024*1024)
//
alert(10*1024*1024*1024)
//
alert(1024*1024*1024*1024)
//
alert(1024*1024*1024)
//Практика на формулы в JavaScript
const PI = 3.14;
let radius = 5;
let s = 2 * PI * radius;
alert(s.toFixed(2));
//
let aaaa = 4;
let ssss = aaaa**2;
alert(ssss); 
//
let aaaa1 = 6 , bbbb1 = 9;
let perimetr = aaaa1*2 + bbbb1*2;
alert(perimetr);
//
let tc = 23;
let ft = (tc * 9/5) + 32 ;
alert(ft.toFixed(1));
//
let tf = 79;
let tc1 = ((tf - 32)/9*5);
alert(tc1.toFixed(1))