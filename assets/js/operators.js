// assigning operators
var namestr = prompt("Enter Your Name", "");

function reverse(str) {
  console.log([...namestr]);
  const newArray = [...namestr].reverse();

  newArray.map((item, index) => {
    setTimeout(() => {
      console.log(item);
      document.getElementById("demo").innerHTML =
        newArray + " Reversed string Display By secondes " + item;
    }, 5000 * index);
  });
}

reverse(namestr);

/*
// arthamatical operation using boolean

var x = 2;
var y = 10;

var z = y / x;

console.log(z);

console.log(10 / 2 == 10.0 / 2.0);

console.log(10 % 2);

//exponense operator
console.log(2 ** 2);
console.log(4 ** 2);

//increment oprator
var x = 2;
console.log(x++);

var y = 4;
console.log(++y);

var z = y;
console.log(z);

//unary operator

var x = 2;
console.log(x--);

var y = 4;
console.log(--y);

var z = y;
console.log(z);

// unary opeartor
var x = 10;
console.log(-x);

// concainate operation

var str = "alpha";
var str1 = "bet";
var cant = str + str1;

console.log(cant);

// string concatination operator

var str = "happy";
var str2 = 10;
var str3 = str + str2;
console.log(str3);

//comma operator

var num = (1 + 2, 2 + 3, 4 + 5);
console.log(num);

//comaparison operator

console.log(50 > 20);

console.log(50 == 20);

console.log(50 == 50);

console.log(50 != 20);

console.log("z" > "A");

console.log("this calculates the alhanumerical values");

console.log("tony" > "tiny");

console.log("6" > 3);
console.log("01" == 1);

//conditional operator

var licences;
var age = prompt("enter your age", "");
if (age > 18) {
  licences = "Issue driving licenses";
} else {
  licences = "don not issue licess";
}

console.log(licences);

//ternary operator

var licences;
age = prompt("Enter your age", "");
//variable=condition ? 'print this' :(or) 'print this'
licences = age > 18 ? "provide license" : " please don not provid licences";

console.log(licences);

//conditional statements

var score = prompt("Enter Your Score", "");
var grade =
  score > 100
    ? console.log("Grade A")
    : score > 50
    ? console.log("Grade B")
    : score > 30
    ? console.log("Grade C")
    : console.log("Grade D");
*/
