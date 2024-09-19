console.log('Start');
const login = (username, password, cb) => {
  setTimeout(() => {
    console.log('credentials:', username, password);
    let ok = true; 
    cb(ok); 
  }, 1000); 
};
login('user', 'pass', (success) => {
  console.log(success ? 'Login success!' : 'Login failed!');
});
console.log('End');

// Output:
// Start
// End
// credentials: user pass
// Login success!

// callback hell
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
      doThirdThing(newResult, function(finalResult) {
        console.log('Got the final result: ' + finalResult)
      }, failureCallback)
    }, failureCallback)
  }, failureCallback)
