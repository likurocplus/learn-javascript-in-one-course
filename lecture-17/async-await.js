const promise1 = async () => new Promise((resolve) => setTimeout(() => {
    console.log(1);
    resolve(1)
}, 2000));
const promise2 = async () => new Promise((resolve) => setTimeout(() =>{
    console.log(2)
    resolve(2)
}, 1000));
const printNum = async () => {
    try {
        let a = await promise1();
        let b = await promise2();
        console.log(a+b);
    } catch (error) {
        console.log(error);   
    }
}
printNum();


