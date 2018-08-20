var btn = document.getElementById("task7_btn");
btn.onclick = function () {
  var login = document.getElementById("task7_inp1").value;
  var email = document.getElementById("task7_inp2").value;
  var pass = document.getElementById("task7_inp3").value;
  var isMarried = document.getElementById("task7_inp4").value;
  var phone = document.getElementById("task7_inp5").value;

  var usersArray = '[\n   {\n      login:"lol",\n      email:"lol@gmail.com",\n      pass:"pass2",\n      isMarried:true,\n      phone:"123456"\n   },' +
  '\n   {\n      login:"lol",\n      email:"lol@gmail.com",\n      pass:"pass2",\n      isMarried:true,\n      phone:11223344\n   },' +
  '\n   {\n      login:"lol",\n      email:"lol@gmail.com",\n      pass:"pass3",\n      isMarried:false,\n      phone:2345678\n   },' +
  '\n   {\n      login:"lol",\n      email:"lol@gmail.com",\n      pass:"pass4",\n      isMarried:true,\n      phone:987654\n   }';
  function addUser(){
    //variables
    //login -> login
    //email -> email
    //pass -> password
    //isMarried -> isMarried value
    // phone -> phone
    //code here;
  }
  var newUser = addUser();
  if(newUser){
    document.getElementById("msg7").innerHTML = '<pre>'+ usersArray + '\n   {\n      login:"' +newUser["login"]+'",\n      email:"'+newUser["email"]+'",\n      pass:"'+newUser["pass"]+'",\n      isMarried:'+newUser["isMarried"]+',\n      phone:'+newUser["phone"]+'\n   }' + '\n]</pre>';
  }else{
    document.getElementById("msg7").innerHTML ='<pre>' + usersArray + '\n]</pre>';
  }
}
