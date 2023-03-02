// // Задание 1
// // Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

// const arrNames = ['Olga', 'Ivan', 'Kirill', 'Vasya', 'Alexander', 'Anna', 'Polina']
//     // const arrNames = ['Olga', 'Ivan', 'Kirill'];

// let [firstName, secondName, ...arrOtherName] = arrNames;

// for (let name of arrOtherName) {
//     if (arrOtherName.length < 2) {
//         secondName = 'alex'
//     } else {
//         console.log(name);
//     }
// }
// console.log(firstName);
// console.log(secondName);


// // Задание 2
// // Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.

// const arrNames = ['Olga', 'Ivan', 'Kirill', 'Vasya', 'Alexander', 'Anna', 'Polina'];

// function names1([firstName, secondName, thirdName]) {
//     console.log(firstName);
//     console.log(secondName);
//     console.log(thirdName);
// }

// names1(arrNames)


// function names2(arr) {
//     let [firstName, secondName, thirdName] = arr;
//     console.log(firstName);
//     console.log(secondName);
//     console.log(thirdName);
// }

// names2(arrNames)


// Задание 3
// Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.



const person = {
    firstName: 'Olga',
    age: 29,
    mood: 'The best all',
    address: {
        country: 'Belarus',
        city: 'Brest',
        street: 'Pronyagina',
        house: 54
    }
}

let a = 'surName';
let b = 'animal';
person[a] = 1;
person[b] = 2;

let { firstName, address: { city }, surName, animal, address: {...fields }, ...fieldsMain } = person;
console.log(firstName, city, surName, animal, fields, fieldsMain);

// // несовсем поняла задание, сделала 2 варианта мыслей

// let { firstName, address: { city }, number1 = 1, number2 = 2, ...fields } = person;
// console.log(firstName, city, number1, number2, fields);