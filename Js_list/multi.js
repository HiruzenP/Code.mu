let arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr1[3][2]+arr1[1][1]+arr1[2][0]+arr1[0][0])
//
let arr2 = [[1, 2], [3, 4], [5, 6]];
console.log(arr2[0][0]+arr2[0][1]+arr2[1][0]+arr2[1][1]+arr2[2][0]+arr2[2][1])
//
let arr = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
console.log(arr[0][0][0]+arr[0][0][1]+arr[0][1][0]+arr[0][1][1]+arr[1][0][0]+arr[1][0][1]+arr[1][1][0]+arr[1][1][1])
//
let arr3 = [
    [
        1, 2, 3,[4, 5, 
            [6, 7]
        ]
    ], 
        [8, [9, 10]
    ]
];
console.log(arr3[0][0]+arr3[0][1]+arr3[0][2]+arr3[0][3][0]+arr3[0][3][1]+arr3[0][3][2][0]+arr3[0][3][2][1]+arr3[1][0]+arr3[1][1][0]+arr3[1][1][1])
//Перебор многомерных массивов в JavaScript
let sumarr4 = 0;
let arr4 = [
    [1, 2, 3], 
    [4, 5], 
    [6]
];
for ( i = 0; i < arr4.length; i++) {
    for ( j = 0; j < arr4[i].length; j++){ 
        sumarr4 += arr4[i][j];
    }
}
console.log(sumarr4);
//
let sumarr5 = 0
let arr5 = [
    [
        [1, 2], 
        [3, 4]
    ], 
    [
        [5, 6],
        [7, 8]
    ]
]; 
for (i = 0; i < arr5.length; i++){
    for (j = 0; j < arr5[i].length; j++){
        for (k = 0; k < arr5[i][j].length; k++){
            sumarr5+=arr5[i][j][j];
        }
    }
}
console.log(sumarr5)
//
let sumarr6 = 0;
let arr6 = [
    [1, 2, 3], 
    [4, 5], 
    [6]
];
for (subArr of arr6) {
    for (elem of subArr){ 
        sumarr6+=elem;
    }
}
console.log(sumarr6)
//
let sumarr7 = 0;
let arr7 = [
    [
        [1, 2], 
        [3, 4]
    ], 
    [
        [5, 6],
        [7, 8]
    ]
]; 
for(subArr of arr7){
    for(subArr2 of subArr){
        for(elem of subArr2)
        sumarr7+=elem
    }
}
console.log(sumarr7)
//Заполнение многомерных массивов JavaScript
let arr8 = [];

for (let i = 0; i < 3 ; i++){
    arr8[i] = [];

    for (let j = 0; j < 5; j++){
        arr8[i].push(j+1);
    }
}
console.log(arr8)
//
let arr9 = [];

for (let i = 0 ; i < 3 ; i++){
    arr9[i] = [];

    for (let j = 0 ; j < 4 ; j++){
        arr9[i].push('x')
    }
}
console.log(arr9);
//
let arr10 = [];
for (let i = 0 ; i < 3 ; i++){
    arr10[i] = [];

    for (let j = 0 ; j < 2 ; j++){
        arr10[i][j] = [];

        for (let k = 0 ; k < 5 ; k++){
            arr10[i][j].push(k + 1)
        }
    }
}
console.log(arr10)
//Проблемы при заполнении многомерных массивов в JavaScript
let arr11 = [];

for (let i = 0; i < 3; i++) {
    arr11[i] = []
	for (let j = 0; j <= 5; j++) {
		arr11[i].push(j);
	}
}

console.log(arr11);
//
let arr12 = [];

for (let i = 0; i < 3; i++) {
	arr12[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr12[i].push(j);
	}
}

console.log(arr12);
//
let arr13 = [];

for (let i = 0; i < 3; i++) {
	arr13[i] = []
	
	for (let j = 0; j < 5; j++) {
		arr13[i].push(j);
	}
}

console.log(arr13);
//
let arr14 = [];

for (let i = 0; i < 3; i++) {
	arr14[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr14[i].push(j);
	}
}

console.log(arr14);
//
let arr15 = [];

for (let i = 0; i < 3; i++) {
	arr15[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr15[i].push(j);
	}
}

console.log(arr15);
//
let arr16 = [];

for (let i = 0; i < 3; i++) {
	arr16[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr16[i].push(j);
	}
}

console.log(arr16);
//Заполнение многомерных массивов по порядку в JavaScript
let arr17 = [];

for (let i = 0; i < 4; i++) {
	arr17[i] = [];
	
	for (let j = 0; j <= 1; j++) {
		arr17[i].push(k - 1);
        k++
	}
}

console.log(arr17);
//
let arr18 = [];
k = 2 ;
for (let i = 0; i < 4; i++){
    arr18[i] = [];
    for (let j = 0 ; j <=2; j++){
        arr18[i].push(k);
        k+=2
    }
}

console.log(arr18);
//
let arr19 = [];
let n = 1;
for (let i = 0 ; i < 2; i++){
    arr19[i] = [];
    for (let j = 0 ; j < 2; j++){
        arr19[i][j] = []
        for (let k = 0 ; k < 2 ; k++){
            arr19[i][j].push(n++)
        }
    }
}
console.log(arr19);
//
let arr20 = [];
k = 1;
for (let i = 0; i < 3; i++) {
	arr20[i] = [];
	for (let j = 0; j < 3; j++) {
		arr20[i].push(k)
		k++;
	}
}

console.log(arr20);
//Многомерные объекты в JavaScript
