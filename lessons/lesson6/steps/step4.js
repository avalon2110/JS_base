// попередній таск

// modern sollution
const filterUsers = (arr) => arr.filter(el => el.gender === 'male' && el.age > 30);

// not modern solution
function filterUsers(arr) {
  var filtered = arr.filter(function(user){
      if(user.gender === 'male' && user.age > 30) {
        return true;
      } else {
        return false;
      }
  })
  
  return filtered;
}



// concat
// створює новий масив, в який копіює елементи з початкового
// масиву і значення, які передаються

var arr = [1, 2];
var newArr = arr.concat(3, 4);

alert( newArr ); // 1,2,3,4


// можна передавати як аргумент - масив
var arr = [1, 2];
var newArr = arr.concat([3, 4], 5); 

alert( newArr ); // 1,2,3,4,5



// reverse
// метод який міняє масив задом наперед
var arr = [1,2,3,4,5];
arr.reverse();
console.log(arr); // [5,4,3,2,1]

// DOM

// взяти значення елемента за його ID
var input = document.getElementById("input");
var value = input.value;


//збереже у змінну li всі list item на сторінці
// в вигляді масиву
var li = document.getElementsByTagName("li").


// знайти перший li
var firstLi = document.getElementsByTagName("ul")[0]



// за класом
var allClasses = documents.getElementsByClassName("class");



//поверне перший елемент, який відповідає критерію.
var firstClass = document.querySelector(".myclass");

// queryselector повільніший за інші методи



// onclick
document.getElementById("btn").onclick = function(){
  //виконається, коли клікнути на кнопку
}


// за допомогою jquery це можна робити набагато простіше
$("#btn").click = function() {

}

//task
// написати функцію, яка приймає параметр - стрічку
// var str = "qwerty";
// і повертає протилежне значення - "ytrewq";



console.log(func("qwerty"));







