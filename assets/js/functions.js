// what is function

//function is nothing but set of statement performs the task or calculate the values

// function with the scope inside local (means variable scope performs only inside the fucntion)

function greet() {
  var message = "hai";
  console.log(message);
}
greet();

// scope outside means globel declaration
var globel = "Hello Hai";
function greet2() {
  var message2 = "Hello";
  console.log(message2);
}
greet2();

console.log(globel);
