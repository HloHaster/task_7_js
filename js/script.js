// Первое задание

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['Text', 'Audio', 'Video'];

let arr3 = arr1.concat(arr2);
arr3.reverse();

console.log(arr3);


// Второе задание

let dumbledoresArmy = [
    {age: 15, name: "Harry", wasThere: true},
    {age: 16, name: "Draco", wasThere: false},
    {age: 15, name: "Ronald", wasThere: true},
    {age: 17, name: "Luna", wasThere: true},
    {age: 16, name: "Crabbe", wasThere: false},
    {age: 16, name: "Hermione", wasThere: true},
    {age: 15, name: "Neville", wasThere: true},
];

// если всех
function findAverageAge(members) {
    return members.reduce((sum, current) => sum + current.age, 0) / members.length;
}

console.log("Средний возраст: " + findAverageAge(dumbledoresArmy));

// только true
function findAverageAgeOfMembers(army) {
    let sum = 0;
    let amount = 0;

    army.forEach((item) => {
        if (item.wasThere) {
            sum += item.age;
            amount++;
        }
    })
    return sum / amount;
}

console.log("Средний возраст участников: " + findAverageAgeOfMembers(dumbledoresArmy));

// 2.2 Преобразовать только в массив имен
let membersNames = dumbledoresArmy.map((item) => item.name);
console.log(membersNames);


// Третье задание

let arr = [14, 15, 1, -10, -8, 0, 12, -11];

//3.1 Скопировать в переменную arrCopy и отсортировать массив в порядке возрастания
let arrCopy = arr.slice().sort((a, b) => a - b);
console.log(arrCopy);

//3.2 Отсортировать массив так, чтобы остались только отрицательные числа. Затем расположить их в порядке убывания
let negativeArr = arr.filter((item) => item < 0);
negativeArr.sort((a, b) => b - a);
console.log(negativeArr);

//3.3 Возвести в квадрат каждый элемент массива, затем расположить по возрастанию, а потом вывести все строкой
let newArr = arr.map(item => Math.pow(item, 2));
newArr.sort((a, b) => a - b);
console.log(newArr.join());


// Четвертое задание

let numbers = [44, 35, 76, 2, 65, 71, 3, 55, 76];

// 4.1 Вывести значения всех элементов массива и их индексы: Индекс 0 - число 44
numbers.forEach((item, index) => console.log(`Индекс ${index} - число ${item}`));

//4.2 Вывести на экран максимальное число массива
console.log(Math.max.apply(null, numbers));

//4.3 Определить индекс максимального числа массива (или индексы, если число встречается более одного раза)
function findMaxIndex(arr) {
    let max = Math.max.apply(null, arr);
    let newArr = [];

    arr.forEach((item, index) => {
        if (item === max) {
            newArr.push(index);
        }
    })
    console.log(newArr);
}

findMaxIndex(numbers);

// Пятое задание

let students = [
    {name: 'John', id: 123, marks: 9},
    {name: 'Kate', id: 101, marks: 5},
    {name: 'Olya', id: 200, marks: 7},
    {name: 'Dan', id: 115, marks: 10}
]

//5.1 Выведите масииив имен в верхнем регистре
let names = students.map(item => item.name.toUpperCase());
console.log(names);

//5.2 Создайте массив, куда будут добавлены только оценки стедентов, а затем посчитайте их средний балл
let marks = students.map(item => item.marks);
function getAverageMark(array) {
    return array.reduce((sum, mark) => sum + mark, 0) / marks.length;
}

console.log("Средний балл: " +getAverageMark(marks));

// Шестое задание

let arr4 = [1, 2, 3, 0, 12, 1, 3];
let arr5 = [9];

function findAmountOfElements(arr, number) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum >= number) {
            return ++i;
        }
    }
    return -1;
}

function printAmountOfElements(result) {
    if (result < 0) {
        console.log("Не хватает элементов");
    } else {
        console.log("Количество: " + result);
    }
}

printAmountOfElements(findAmountOfElements(arr4, 10));
printAmountOfElements(findAmountOfElements(arr5, 10));
