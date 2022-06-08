import { User } from './models/User'

const user = new User({ username: 'David', age: 24 })

user.on('click', () => {
  console.log('this is a click event #1')
})

user.on('click', () => {
  console.log('this is a click event #2')
})

user.trigger('click')
// console.log(user)