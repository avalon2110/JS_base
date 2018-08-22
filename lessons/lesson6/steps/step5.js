попередній таск

// modern solution
const reverseString = (str) => str.split("").reverse().join("");


// not modern solution
function reverseString(str) {

    var arr = str.split("");

    arr.reverse();
    var result = arr.join("");

    return result;
}



(function(){
// self invoked function

//secure
//var a = 5;//if call in console, it will be undefined

})();
