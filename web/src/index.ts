import { User } from './models/User'

console.log(new User({ username: 'David', age: 24 }).get('username'))