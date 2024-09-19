// asynchronous function
console.log('1st line') // 1st line
const username = 'likuro'
const password = 'khoiquoc'

function login(username, password) {
  setTimeout(() => {
    console.log('login success with:', username, password)
  }, 1500) //result returns after 1.5 second
}
login(username, password)
console.log('last line')

// 1st line
// last line (does not wait for function login() to finish)
// login success with: likuro khoiquoc

