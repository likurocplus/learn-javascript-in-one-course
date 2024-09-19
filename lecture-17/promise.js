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
        setTimeout(()=>console.log(3),2000); //3
    }) 
})
.then(()=> {
    setTimeout(()=>console.log(4),1000); //4
})
//if don't return new Promise result is:  1 2 4 3
//if return 