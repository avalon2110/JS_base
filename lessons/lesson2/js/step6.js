// цикли
// цикл while

// синтаксис

// while(умова){
//   щось робити поки умова true
// }



// var a = 0; // початкова значення змінної, яка буде перевірятися
// while(a < 10){
//   console.log(a); // щось виконується в циклі
//   a++; // додаємо 1 до змінної, яку перевіряємо
//   // якщо не додавати, то цикл буде виконуватися вічно.
// }

// в циклі повинна бути умова виходу з циклу
//
//
//
// while(true){
//   виконується вічно
// }
//
// while(false){
//   ніразу не виконається
// }

//task 1
// є стрічка
// var str = "Hello World";
// вивести кожну букву цієї стрічки
// тобто має бути так
// H
// e
// l
// l
// o
//
// W
// o
// r
// l
// d
//
// або алертами



// цикл do while
// такий самий як і while, тільки do while виконається як мінімум один раз
// синтаксис
// do{
//   робити щось
// } while(умова)


//виконається лише один раз
// do{
//   console.log("hello");
// }while(false);


//task 2
// питаємся в юзера логін(метод prompt)
// якщо він ввів "Admin", кажемо "hello admin"
// якщо ввів щось інше знову питаємося його логін і до тих пір питаємося, поки не введе "Admin"



//task 3
// використовуючи while вивести всі парні числа, які є в діапазоні 1-20
// тобто має вивестись
// 2
// 4
// 6
// 8
// 10 . т.д.

// перевіряти чи число є парним можна використовуючи оператор %(результат остачі від ділення на 2 має бути 0)
// приклад
// 4%2 == 0
// 5%2 == 1
// 6%2 == 0




//task 4
// використовуючи prompt i while напишіть код, який питає в юзера число
// якщо число менше 100 , попросіть знову ввести число
// хай вводить число до тих пір, поки не введе 100 або більше









































































































































//task 1
// є стрічка
// вивести кожну букву цієї стрічки

var str = "Hello";

var i = 0;
while(i < str.length) {
    console.log(str[i]);
    i++;
}


//task 2
// питаємся в юзера логін(метод prompt)
// якщо він ввів "admin", кажемо "hello admin"
// якщо ввів щось інше знову питаємося його логін і до тих пір питаємося, поки не введе "Admin"

var userName = prompt('Enter login');

while(userName !== 'admin') {
    userName = prompt('Enter login again');
}
console.log('hello, ', userName);


//task 3
// використовуючи while вивести всі парні числа, які є в діапазоні 1-20
// тобто має вивестись
// 2
// 4
// 6
// 8
// 10 . т.д.

var i = 0;

while(i <= 20) {
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
}





//task 4
// використовуючи prompt i while напишіть код, який питає в юзера число
// якщо число менше 100 , попросіть знову ввести число
// хай вводить число до тих пір, поки не введе 100 або більше


do{
     var num = +prompt('Enter number');
} while(num < 100);

alert(num);