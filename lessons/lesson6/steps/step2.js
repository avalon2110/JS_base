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
