var fruits = ["apple", "mango", "banana"];
for (var i = 0; i <= fruits.length; i++) {
  var fruits2 = [...fruits];
}
document.getElementById("demo3").innerHTML = fruits2;
