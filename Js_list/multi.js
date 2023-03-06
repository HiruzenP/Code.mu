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
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
console.log(obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 + obj.key3.key2 + obj.key3.key3)
//
let obj2 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj2[2][2]+' '+obj2[3][1])
//
let obj3 = {
	key1: {
		a: 1,
        b: 2, 
        c: {
			d: 3,
			e: 4,
		}, 
        f: 5,
	},
	key2: {
		g: 6, 
        h: 7,
	},
}
console.log(obj3.key1.a+obj3.key1.b+obj3.key1.c.d+obj3.key1.c.e+obj3.key1.f+obj3.key2.g+obj3.key2.h)
//
let sumObj4 = 0
let obj4 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
for (key in obj4){
    let subObj = obj4[key];

    for (let subKey in subObj){
        sumObj4+=subObj[subKey];
    }
}
console.log(sumObj4)
//
let sumObj5 = 0
let obj5 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
for (let key in obj5){
    subObj5 = obj5[key];
    for (let subkey in subObj5){
        subsubObj5 = subObj5[subkey]
        for (let subsubkey in subsubObj5){
            sumObj5+=subsubObj5[subsubkey]
        }
    }
}
console.log(sumObj5)
//
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][1])
//
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (obj in data){
    for (dataname of data[obj]){
        console.log(dataname)
    }
}
//
let data2 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for (subObj of data2){
    for (key in subObj){
        console.log(subObj[key]) 
    }
}
//
let data3 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for (subObj of data3){
    for (Objkey in subObj){
        for(key of subObj[Objkey]){
            console.log(key)
        }
    }
}
//
let allsalary = 0
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let employ of employees){
    allsalary+=employ.salary
}
console.log(allsalary)
//
let salary = 0;
let employees2 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
for (employ of employees2){
    if (employ.age <= 30){
        salary+=employ.salary;
    }
}
console.log(salary)
//
let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru';
let month = 5;   
console.log(months[lang][month])
//
let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
let year2 = '2019';
let month2 = 12;
let day = 30;
console.log(affairs[year2][month2][day])
//
let obj6 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj6[key1][key2]);
//
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees3.push({
    name: 'name4',
    salary: 600,
    age: 31
});
console.log(employees3)
//
let affairs4 = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}
affairs4["2019-12-29"].push('data24')
affairs4["2019-12-31"] = []
affairs4["2019-12-31"].push(
    'data41',
    'data42', 
)

console.log(affairs4)
//
let students2 = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
students2.group1.subgroup11.push('student114')
students2.group1.subgroup13 = [];
students2.group4 = {}
students2.group4.subgroup41 = ['student411','student412']
console.log(students2)
//end