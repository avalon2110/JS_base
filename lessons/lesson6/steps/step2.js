// попередній таск

// цикл
const loopFact = (num, stepin) => {
  
  let result = 1;

  for (let i = 0; i < stepin; i++) {
      result *= num;
  }

  return result;
};


// рекурсія
const recFact = (num, stepin) => {    
  if (stepin == 0) {
      return 1;
  } else {
      return num * recFact(num, stepin - 1);
  }
};


console.log(recFact(2,5));
console.log(recFact(2,0));




// new Date()

var date = new Date();

//створить змінну date,
// в якій буде записана дата в форматі
// Sun Nov 12 2017 22:43:28 GMT+0200 (EET)

date.getFullYear() -->поверне рік '2017'
date.getMonth() --> поверне місяць 0-11
date.getDate() --> поверне число місяця 1-31
date.getHours() --> години
date.getMinutes() --> хвилини
date.getSeconds()  --> секунди
date.getMilliseconds() --> мілісекунди



// можна отримувати дату в іншому вигляді

var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}
date.toLocaleString("en-US", options);
// поверне "Sunday, November 12, 2017"
