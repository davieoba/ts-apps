

import { Eventing } from './models/Eventing'
import { User } from './models/User'


// console.log(user.events.on('click', () => { console.log('this is a click event') }))
// user.events.trigger('click')


// 2nd approach 
const user = new User({ username: 'David', age: 23 })

// user.on('click', () => { console.log('click event #1') })
// note: by running user.on we would get the return function already since it is a getter function so when I call it I am already calling the return function.

console.log(user.get('username'))

const colors = {
  primary: 'red',
  printColor() {
    console.log(this.color)
  }
}

class Colors {
  color: string = 'red'

  printColor = () => {
    this.color = 'green'
    console.log(this.color)
  }
}

const color1 = new Colors()
color1.printColor()
// console.log()

// using the arrow function instead of normal function would bind the this to the instance of Colors

