if(1 > 2) {
    console.log("Your crush will confess to you");
} else if (2 > 2) {
    console.log("Your crush will love you");
} else if (3 > 2) {
    if (isRich==true) {
      if (isGoodBoy==true) {
        if (isHotBoy==true) {
          console.log("Your crush's crush is you =))))")
        }
      }
    }
} else {
    console.log("We are good friends!!!");
}



// Conditional statement: switch... case

function getPrice(fruit) {
    switch(fruit) {
      case 'apple':
        console.log('apple 200k/kg')
        break // break is to break out of this "case"
      case 'orange':
        console.log('orange 30k/kg')
        break
      default:
        console.log('flat rate:', fruit, '100k/kg')
        break
    }
  }
  
  getPrice('orange') // orange 100k/kg
  getPrice('papaya') // apple 100k/kg
  getPrice('mango') // flat rate: mango 100k/kg
  getPrice('blueberry') // flat rate: blueberry 100k/1kg


let i = 0
do {
  console.log(i)
  i++
  break;
} while(i <= 3)
// 0
let j = 0


while(i <= 3) {
  console.log(j)
  j++
  break;
}
// 0 1 2 3


let familyMember = ["Tu","Hanh","Hung","Quoc","Hung","Ngan","Khanh"];
for (let i = 0; i < familyMember.length; i++) {
    if(familyMember[i]==="Quoc"){
        continue;
    }
    console.log(familyMember[i]);
}
// Tu Hanh Hung Hung Ngan Khanh

for (const element of familyMember) {
    console.log(element);
}
// Tu Hanh Hung Quoc Hung Ngan Khanh

const QuocObj = {
    name: "Luong Vo Khoi Quoc",
    class: "D22CQPTUD01-N",
    id: "N22DCPT077"
}
for (const key in QuocObj) {
    console.log(key);
} 
//name //class //id 