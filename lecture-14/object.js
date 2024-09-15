//Object
const myInfo = {
    //property
    name: "Luong Vo Khoi Quoc",
    // class: "D22CQPTUD01-N",
    id: "N22DCPT077",
    major: "Multimedia Software Development",

    //method
    selfIntroduce: () => {
        console.log(`Hi, my fullname is ${myInfo.name}. My major is ${myInfo.major}`);
        return {
            showID: () => {
                return `My ID is ${myInfo.id}`;
            }
        }
    }
}
console.log(myInfo.selfIntroduce().showID())


// Convert object to string, JSON.stringify()
const car8 = {
    name: 'Bumblebee',
    age: 201,
  }
  console.log(JSON.stringify(car8)) // '{"name":"Bumblebee","age":201}'
  console.log(car8.toString()) // [object Object], wrong! do not use


//String to Object
let str = '{"name":"Luong Vo Khoi Quoc","id":"N22DCPT077"}';
let obj = JSON.parse(str);
console.log(obj);