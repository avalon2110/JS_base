// методи перебору масивів

// arr.filter(callback)
// повертає новий масив, в який ввійдуть тільки
// ті елементи масиву, перевірка яких поверне true

var users = [
  {
    name: "name0",
    age: 20
  },
  {
    name: "name1",
    age: 10
  },
  {
    name: "name2",
    age: 15
  },
  {
    name: "name3",
    age: 30
  }
]

var adultUsers = users.filter(function(element){
  return element >=18;
})


//повернеться масив з двої юзерів
[
  {
    name: "name0",
    age: 20
  },
  {
    name: "name3",
    age: 30
  }
]



//map
// створює новий масив
// наприклад є масив юзерів
// і треба в окремий масив зберегти всі їхні імена

var users = [
  {
    name:"name0",
    salary: 50
  },
  {
    name:"name1",
    salary: 500
  },
  {
    name:"name2",
    salary: 250
  },
  {
    name:"name3",
    salary: 350
  },
  {
    name:"name4",
    salary: 450
  }
];

//звичайний for цикл
var newArr = [];
for(var i = 0; i < users.length; i++){
  newArr[i] = users[i].name;
}

// map

var userNames = users.map(function(element){
  return element.name;
})

// в userNames збережеться -->  ["name0", "name1", "name2", "name3", "name4"]




// arr.every - поверне true, якщо для всіх елементів
// повертається true
//
// arr.some - поверне true, якщо хоча б один елемент повертає true



var users2 = [
  {
    name: "name0",
    isMarried: false
  },
  {
    name: "name0",
    isMarried: true
  },
  {
    name: "name0",
    isMarried: false
  },
  {
    name: "name0",
    isMarried: false
  }
]

// поверне true, бо хоча б один юзер є одружений
var isSomeOneMarried = users2.some(function(element){
  return element.isMarried === true;
})

// arrow function
let isSomeOneMarried = users2.some(el => el.isMarried === true);




// поверне false, бо не всі юзери є одружені
var isEveryMarried = users2.every(function(element){
  return element.isMarried == true;
})

//arrow function
let isEveryMarried = users2.every(el => el.isMarried === true);







//task

// написати функцію, яка приймає 1 параметр - масив
var array = [
  {
    name: "John",
    age: 24,
    gender: "male"
  },
  {
    name: "Mike",
    age: 14,
    gender: "female"
  },
  {
    name: "John",
    age: 34,
    gender: "male"
  },
  {
    name: "John",
    age: 54,
    gender: "male"
  },
  {
    name: "John",
    age: 13,
    gender:"female"
  }
]

// і повертає новий масив , в який входять чоловікі старше 30років
