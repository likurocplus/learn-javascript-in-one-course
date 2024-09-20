function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = myGenerator(); // Returns an iterator
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true } (end of generator)

// Generator function, function can be paused and continued

function* createGenerator() {
    console.log('run to yield 1')
    yield { name: 'Luong Vo Khoi Quoc' } // 1st 
    yield // 2nd 
    console.log('run to yield 3')
    yield 3 // 3rd
    console.log('finish')
    return 'final'
  }
  // Generator object
  const generator = createGenerator()
  console.log(generator.next()) // function is paused at the 1st `yield`
  // run to yield 1
  // { value: { name: 'Luong Vo Khoi Quoc' }, done: false }
  console.log(generator.return('Nguyen Phuong Linh'))
  // { value: 'Nguyen Phuong Linh', done: true }
  console.log(generator.next()) // { value: undefined, done: true }
  console.log(generator.throw(new Error('error'))) // Error: your message








function printAllArguments(a, b, c, d) {
    console.log(arguments) // (i)
    console.log(arguments[0]) // (ii)
    console.log(arguments[1]) // (iii)
    console.log(arguments[2]) // (iv)
    console.log(arguments.length) // (v)
    console.log(a,b,c) // (vi)
}

printAllArguments('Luong','Vo','Khoi', 'Quoc');