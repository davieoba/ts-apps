// method 2
import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

interface UserProps {
  username?: string;
  age?: number;
  id?: number;
}

// note: for this code below I am telling ts that this function would return an object // type fn = () => {}

// type fn = () => void

//note: method 2
export class User {
  data: UserProps
  events: Eventing
  // events: { [key: string]: fn[] } = {}

  static fromData(data: UserProps): User {
    const user = new User(new Eventing())
    user.set(data)
    return user
  }

  constructor(events: Eventing) {
    this.data = {}
    this.events = events
  }

  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    console.log(this.data)
    Object.assign(this.data, update)
  }


  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then((res: AxiosResponse) => {
      console.log(res.data)
      // this.set(res.data)
    })
  }

  save(): void {
    const id = this.data.id || this.get('id')

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post(`http://localhost:3000/users`, this.data)
    }

  }
}


// note: for the on method, I think what we are trying to do is to create and store all the possible list of events that this project can have and then be able to call those methods at at future point in time.

//note: events above the type definition explanation: events is going to be an object but I do not know the property names, that is why it has [key:string], so whatsoever propery(ies) it has would be equal to the array of callback function, "we just dont know what are the properties this object would have but we know that it is an object" example: this.events['name'] = [callback() => {}]

// note: for the > save method < , if the user object has an id on it then we want to perform a put/patch request if it does not have an id on it we want to do a post request. the reason for this thinking is that if the object has an id it is percieved or seen as one that has been store on the database but if it does not then it is percieved as one that is a new data



/*

export class User {
  data: UserProps
  events: Eventing
  // events: { [key: string]: fn[] } = {}

  static fromData(data: UserProps): User {
    const user = new User(data, new Eventing())
    user.set(data)
    return user
  }

  constructor(data: UserProps, events: Eventing) {
    this.data = data
    this.events = events
  }

*/

// note: method #1 accept dependencies as second constructor argument
// pass the eventing class into user class, accept dependencies as an arguement
// const user = new User({ username: 'David', age: 24 }, new Eventing())
export class User1 {
  data: UserProps
  events: Eventing
  // events: { [key: string]: fn[] } = {}

  constructor(data: UserProps, events: Eventing) {
    this.data = data
    this.events = events
  }

  set(update: UserProps) {
    Object.assign(this.data, update)
  }
}