//видалення елементу з масиву
// метод splice


// var arr = [1,2,3,4,5];
//
// var deleted = arr.splice(1,1);
// // видалити з позиції один(перший аргумент)
// // один елемент(другий аргумент)
// // повертає видалений елемент
//
//
//
// console.log(arr);
// console.log(deleted);







// більше аргументів
// третій параметр вставляється на місце
// того, який видалили
// var arr2 = [1,false,3,4,5];
//
// var deleted = arr2.splice(1,1, 2);
//
// console.log(deleted);
// console.log(arr2);






// якщо потрібно вставити в потрібне
// місце елемент без видалення, потрібно
// робити наступне

// var arr3 = [1,3,4,5];
// arr3.splice(1,0,2);
// //видалити з позиції 1 нуль елементів
// // і вставити двійку
//
// console.log(arr3);


// метод splice модифікує масив


// метод slice
// створює новий масив з позиції (перший параметр)
// до позиції (другий параметр),
// не включаючи останній
// сам масив не міняється


// var arr4 = [1,2,3,4,5];
// var newArr = arr4.slice(2,4);
//
// console.log(newArr); //3,4
// console.log(arr4); // 1,2,3,4,5





// якщо не вказати параметрів, то створиться
// клон масиву


// var clone = arr4.slice();
// console.log(clone);

// forEach
// callback

// higher order functions

function f(fn) {
    fn();
}

function lol() {
    console.log('lol function');
}

f(lol);


//tasks/task7.js
