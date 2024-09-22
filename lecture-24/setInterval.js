let i = 0;
const count = setInterval(()=>{
    console.log(i++);
}, 1000)

setTimeout(()=>{
    clearInterval(count);
    console.log("end");
},4000);
// 0 1 2 end
