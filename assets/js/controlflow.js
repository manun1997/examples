var marks = 30;

switch (marks) {
  case "30":
    var statement = "Poor marks";
    break;

  case "40":
    var statement = "Better Marks";
    break;

  case "50":
    var statement = "Best Marks";
    break;
  default:
    var statement = "Just Passed";
}

document.getElementById("demo1").innerHTML =
  " Swith Case Function  " + statement;
//sequntial statements without break;

var fruits = prompt("Enter The Name", "");

switch (fruits) {
  case "Mango":
  case "Banana":
  case "Grapes":
    console.log("Fruits");
    break;

  case "dal":
  case "sugar":
  case "red chilly":
    console.log("This is not a fruits");
    break;

  default:
    console.log("Not Belongs to anything");
}
// for loop is used for to repete the specific block on unknown number of times
// while will exicutes its loop body if specified condition is true;

var count = 0;
var total = 0;
console.log("count : total");
while (count < 3) {
  count++;
  total += count;
  console.log(count + "\t" + total);
}

//do while will executes the loop untill the specified condtintion becomes falls
//while loop is also called pretest loop
// do while is also called post test loop

var count = 0;
var total = 0;

while (count < 3) {
  count++;
  total += count;
  console.log("count values" + total);
}

var amount = 0;
do {
  amount++;
  console.log("Amount is:" + amount);
} while (amount < 5);
