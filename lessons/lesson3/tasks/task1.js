// На сторінці є два поля
// Перше для email, друге для паролю
// Перевірити чи користувач ввів email(якщо в слові є хоча б одна собачка, значить це email)
// і пароль(пароль має бути не менше 8 символів)
// якщо дві умови виконуються, то присвоїти змінній access = true, якщо хоча б одна умова не виконується
// тоді access = false;
//
// значення першого і другого інпута зберігається в змінних email i pass



document.getElementById("btn").onclick = function () {
  var email = document.getElementById("input1").value;
  var pass = document.getElementById("input2").value;
  var access = false;

  // тут код

  if(access == false){
    $("#navbar").find("input").each(function () {
      this.style.borderColor = "red";
    })
  } else {
    window.open("https://google.com");
  }
}
