//EX1
function numberGenerator() {
    // Local free variable that ends up within the closure
    var num = 1;
    function checkNumber() { 
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number(); // 2


  //EX2
  function outer() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  // const counter = outer();
  console.log(counter());  // Output: 1
  console.log(counter());  // Output: 2

  function counter() {
    let count = 0; // shared data
  
    return function() {
      count++; // modify shared data
      return count;
    };
  }
  
  const increment = counter();
  console.log(increment()); // 1
  console.log(increment()); // 2
  
//Settimeout

function greet(name) {
  setInterval(function() {
    console.log("Hello, " + name);
  }, 2000);
}

greet("Quốc");

