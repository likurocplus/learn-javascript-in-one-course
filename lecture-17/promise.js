const printNum = new Promise((resolve, reject) => {
    setTimeout(resolve(),1000);
})

printNum
.then(()=> {
    console.log(1); //1
    return 2;
})
.then((data)=> console.log(data)) //2 data from .then above
.then(()=> { 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(3)
            resolve(4);
        },2000); //3
  
    }) 
})
.then((data)=> {
    setTimeout(()=>console.log(data),1000); //4
})
//if don't return new Promise result is:  1 2 4 3
//if return new Promise result is : 1 2 3 4

// 2 Promise
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));

//use Promise.all() to wait all Promise run success
Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
    return results;
  })
  //example in this process need result from promise 1 and 2 to calculator 
  .then((data)=> {
    console.log(data[0] + data[1]); //3
  }) 
  .catch((error) => {
    console.error('ms', error);
  });
