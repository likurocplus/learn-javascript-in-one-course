// import a part of
import printName from "./exportES6.js";
import {NAME_1,NAME_2,NAME_3} from "./exportES6.js"
printName(NAME_1) //Luong Vo Khoi Quoc
printName(NAME_2) //Nguyen Phuong Linh
printName(NAME_3) //Vo Thi My Hanh

// import all
import * as exportObj from './exportES6.js'
console.log(exportObj); 
// [Module: null prototype] {      
//     NAME_1: 'Luong Vo Khoi Quoc', 
//     NAME_2: 'Nguyen Phuong Linh', 
//     NAME_3: 'Vo Thi My Hanh',     
//     default: [Function: printName]
//   }
exportObj.default(exportObj.NAME_1) //Luong Vo Khoi Quoc
exportObj.default(exportObj.NAME_2) //Nguyen Phuong Linh
exportObj.default(exportObj.NAME_3) //Vo Thi My Hanh