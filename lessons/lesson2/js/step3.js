// Попереднє завдання
// var age = 100;
// if(age < 18 || age > 60){
//   console.log("nope");
// } else {
//   console.log("yeap");
// }


// Логічне І
//
// Повертає true, якщо всі перевірки повертають true.
// Якщо хоча б одна перевірка повертає false, перевірка зупиняється і повертається false.
// Можна порівнювати любі типи даних(як і в Логічному АБО)

// var name = "John";
// var surname = "Doe";
//
//
// // виконається, бо name --> true i surname -->true
// if(name && surname){
//   console.log("yeap");
// }
//
//
// var age = 25;
// var gender = "male";
//
// // перша перевірка поверне true, а друга перевірка поверне false, тому тіло if не виконається
// if(age > 18 && gender == "female"){
//   console.log("nope");
// }
//
//
// // Можна також присвоїти результат перевірок любій зміннй.
// // Алгоритм наступний:
// // якщо в перевірках є хоча б один false, то перевірка зупиняється і змінній присвоюється значення, яке повернуло false.
// // якщо всі true, то присвоюється останнє true
//
// // наприклад.
//
//
// var num = 1;
// var str = "lol";
// var bool = false;
// var NuLL = null;
//
// // змінній res присвоїться значення першої змінної, яка поверне false;(в даному випадку NuLL)
// var res = num && str && NuLL && bool;
// console.log(res);
//
//
// bool = true;
//
// // всі значення повертають true, тому змінній res присвоїться останнє значення
// res = num && bool && str;
// console.log(res);



//task
// наприклад в нас є сайт для випускників школи, в якій ви вчилися
// і є 3 змінні
// var school = 25; // номер школи
// var city = "Lviv"; //місто
// var year = 2005; //рік випуску
//
// потрібно давати доступ людині(створити змінну access і задати їй значення true),
// яка закінчила ту саму школу в тому самому місті.
//
// використовувати if else і логічне I
//
// якщо людина не з того міста або не з тої школи, вивести щось типу "у вас нема доступу"
