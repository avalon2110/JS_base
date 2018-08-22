// task
// функція приймає обєкт і назву класу
var obj = {
    className: 'class1 class2'
  }

  //стрічка не може бути пуста


  var newClass = "class3";
  var newClass2 = "class2";

  

const addClass = (obj, name) => {
   
    

    return obj.className;
}


console.log(addClass(obj, newClass)); // --> має повернути стрічку 'class1 class2 class3'
console.log(addClass(obj, newClass2)); // не має нічого міняти, бо class2 вже є. поверне 'class1 class2 class3'





//task

// є функція, яка записана через цикл
// функція приймає масив стрічок і повертає масив довжин цих стрічок

var arr = ["We", "all", "live", "in", "a", "yellow", "submarine"];


function getLength(arr) {
    
    // створюєм пустий масив
    var arrLength = [];

    for (var i = 0; i < arr.length; i++) {
        // додаємо в пустий масив довжину кожного елемента
        arrLength[i] = arr[i].length;
    }

    // повертаємо масив довжин стрічок
    return arrLength; 
} 

// переписати цю функцію, використовуюючи метод map всередині функції

function getLength(arr) {

};










//task
// написати функцію, яка приймає 1 параметр - масив користувачів
// і треба перевірити чи всі користувачі мають права
// якщо всі мають права - повертає true

// якщо хоча б один не має прав - повертає false

var arr = [
    {
        name: "name1",
        age: 20,
        hasDriveLicense: true
    },
    {
        name: "name2",
        age: 23,
        hasDriveLicense: true
    },
    {
        name: "name3",
        age: 24,
        hasDriveLicense: true
    },
    {
        name: "name4",
        age: 25,
        hasDriveLicense: true
    },
];

function checkDriveLicense(arr) {

};






//task 
// написати функцію, яка приймає масив користувачів
// функція перевіраяє цей масив і якщо хоча б в одного користувача є машина, повертає true
// якщо ні в кого немає - повертає false


var arr = [
    {
        name: "name1",
        age: 20,
        hasCar: true
    },
    {
        name: "name2",
        age: 23,
        hasCar: false
    },
    {
        name: "name3",
        age: 24,
        hasCar: false
    },
    {
        name: "name4",
        age: 25,
        hasCar: false
    }
];

function checkCar(arr) {

};







//task 

// написати функцію, яка приймає 1 параметр - масив користувачів.
// і повинна повернути останнього користувача(останній елемент масиву)


var arr = [
    {
        name: "name1",
        age: 20,
    },
    {
        name: "name2",
        age: 23,
    },
    {
        name: "name3",
        age: 24,
    },
    {
        name: "name4",
        age: 25,
    }
];

function getLast(arr) {

}








//task
// функція приймає 2 параметра - масив стрічок і стрічку

var arr = ['Stark' , 'Lannister', 'Baratheon', 'Targaryen', 'Greyjoy'];

function find(arr, surname) {

};







//task

// функція приймає 3 параметра
// 1 параметр - масив
// 2 і 3 параметр - діапазон чисел від мін до макс.


var arr = [5, 4, 3, 8, 0, 1, 2];

function filterRange(arr, min, max) {
  
};


var filtered = filterRange(arr, 3, 5); // функція повинна повернути масив з числами, які увійшли в діапазон [5,4,3]
