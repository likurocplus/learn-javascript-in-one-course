// synchronous function
// next line of code executed after previous one finished
console.log('1st line')
let name = 'Luong Vo Khoi Quoc';
const introduce = (name) => {
  console.log('Hello ' + name + '!')
}
introduce(name);
console.log('last line')

// 1st line
// Hello Luong Vo Khoi Quoc!
// last line

