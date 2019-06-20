/* /* function multiply(x, y) {
    return x * y;
  }
  
  console.log(multiply.version);
  
  
  // Function factory
  function makeMultiplier(multiplier) {
    var myFunc = function (x) {
      return multiplier * x;
    };
  
    return myFunc;
  }
  
  var multiplyBy3 = makeMultiplier(3);
  console.log(multiplyBy3(10));
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(100));

  //loops
  var numbers = [10, 20, 30, 40, 50];
  for (var i = 0; i < numbers.length; i++)
  ; {numbers = i+1
      console.log(numbers[i]);
  }

  var table = document.getElementById("priceTable");
var i = 1;
var sum = 0;
while (i < table.row.length) {
    sum += parseFloat(table.row[i].cells[2].innerHTML)
    i++;
} */
//var row = table.insertRow(i);
///var cell1 = row.insertCell(0);
///var cell2 = row.insertCell(1);
///var cell3 = row.insertCell(2);
///cell2.innerHTML = "Total Price";
//cell3.innerHTML = sum;
/////


// Setup
/* function testStrictNotEqual(val) { */
  // Only Change Code Below this Line
  
  /* if (val) { */

  // Only Change Code Above this Line

 /*    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10))

var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
}; */

/* console.log(literalCircle.getArea());

function test () {
  console.log(this);
  this.myname = "Doug";
}
test();
console.log(this.myname);
 */

/* var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
  console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
array[2](array[0])
console.log(array[3].course) */


/* for (var i=0; i < names.length; i++) {
  console.log ("hello " + names[i]);
  }
   */
/*   var names2 = ["Doug", "Stan", "Tom",]; */
/* 
  var myObj = {
    name: "Doug",
    work: "Glen Arden",
   hours: {
     day: "twelve",
     night: "five",
   }
    
}; */
/* 
for (var prop in myObj) {
  console.log (prop + ": " + myObj[prop]);
}
console.log (myObj)
  
  var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

for (var prop in company) {
  console.log (prop + ": " + company[prop])
}
 */
/* var names = ["Doug", 
"Names",
"Max",
"Fred",
];
names[100] = "Jim";


names.name = "hi"
for (var name in names) {
  console.log ("yo" + names[name])
}; */

/* var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++; */
/* }
console.log(counter);

var personMe = {
  firstname: "Doug",
  lastname: "Skanron",
  age: 50,
  eyecolor:"Green",
  occupation:{
    firstjob:"sucks",
    secondjob:"suckstoo"
  },
};
console.log("My name is " + personMe.firstname + "and my job " + personMe.occupation.firstjob + ".")

for (i=0; i < personMe.length; i++) {
  console.log (personMe[i])
}

for (prop in personMe) {
  console.log (prop + personMe[prop])
}

function book(title, author) {
  this.title = title; 
  this.author  = author;
 } 
 var myBook = new book("Perl", "Mohtashim");
book.prototype.price = null;
myBook.price = 100;

 var book1 = new book ("Daylight", "Peter"); 

book1.price = 100; 

console.log("Book title is : " + book1.title + "<br>");
console.log("Book author is : " + book1.author + "<br>");
console.log("Book price is : " + book1.price + "<br>");

console.log("Book title is : " + myBook.title + "<br>");
console.log("Book author is : " + myBook.author + "<br>");
console.log("Book price is : " + myBook.price + "<br>");

function makeMultiplier (multiplier) {
  return (
function (x){
  return multiplier * x;
}
  );
} 

var doubleAll = makeMultiplier(2);
console.log (doubleAll(10));

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter;}
})();
 */
/* function myFunction(){
  document.getElementById("demo").innerHTML = add();
} */ 
var once = " ";
var person = {
  fname: "Mark",
  lname: "tanner",
  age: 44,
}
var x;
for (x in person) {
  once += person[x] + " ";
}
console.log(once);

(function(window) {
   
   var obj = {};
  
    obj.dreamOn = function () {
     console.log("I want to see the global scope! Let me out!");
    };
  
    window.doer = obj;
   
   })(window);
  
   doer.dreamOn();

   var u = "Pay"
   var u = "yeah"
   console.log(u)