var fruits = ["Mango", "apple", "banana"];

console.log(typeof fruits); // ti will returns type of the array
console.log(Array.isArray(fruits)); // this will check the array or not in boolean type
console.log(fruits.toString()); // comma separated values
console.log(fruits.valueOf()); // this will return the value of the string
console.log(fruits.join(" $ ")); // this will concatinaging or joins array values
console.log(fruits.join(" - "));

/*// creating mix array and values

var mixarr = [
  { ename: "smith" },
  false,
  function () {
    console.log("hello");
  },
  "apple",
];

console.log(mixarr[0].ename);
mixarr[2]();
*/
// multi dimentional Aray

var cubes = [
  [1, 2, 3],
  [4, 5, 6],
];

for (var i = 0; i < cubes.length; i++) {
  var cube = cubes[i];
  for (var j = 0; j < cube.length; j++) {
    var elementcubes = "cubes[" + i + "][" + j + "] =" + cube[j];
    var elementcubes = [...cubes];
  }
}
document.getElementById("demo4").innerHTML = elementcubes;

// stack implementation using array LIFO

function reverse(str) {
  var stack = [];

  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  var reversestr = "";
  while (stack.length > 0) {
    var reversestr = reversestr + stack.pop();
  }

  console.log(reversestr);
}

reverse("javascript");

// queses FIFO

var numqueue = "1234";
var quee = [];

for (var i = 0; i < numqueue.length; i++) {
  console.log(numqueue[i]);
  quee.unshift(numqueue[i]);
}

console.log(quee);
