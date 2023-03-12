function myname(){
    console.log('Pitbull')
}
myname();
//
function summ(){
    let sum = 0
    for (i = 0; i <= 100 ; i++){
        sum+=i
    }
    console.log(sum)
}
summ();
//
function square(num){
    console.log(num ** 3);
}
square(5)
//
function check(num){
    if (num >= 0){
        console.log("+++")
    } else {
        console.log('---')
    }
}
check(8)
//
function summa(num1,num2,num3){
    console.log(num1+num2+num3)
}
summa(3,7,4)
//
function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
function round(num) {
	return num.toFixed(3);
}
console.log(round(sqrt(2)))
//
let par1 = 2;
let par2 = 3;
let par3 = 4;
let res = round(sum(sqrt(par1),sqrt(par2),sqrt(par3)))
console.log(res)
//
function divide(num){
    i = 0
    while(true){
        num/=2;
        i++
        if (num <= 10){
            return i;
        }
    }
}

console.log(divide(100))
//
function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func(3, 4));
//