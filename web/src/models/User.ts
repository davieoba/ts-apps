import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing'
import { Sync } from './Sync';

export interface UserProps {
  username?: string;
  age?: number;
  id?: number;
}

// note: for this code below I am telling ts that this function would return an object // type fn = () => {}

// type fn = () => void

// option 3
// only accept properties into constructor
// hard code dependencies as class properties

export class User {
  events: Eventing = new Eventing() // this event class would be on every instance created by default but we wont be swapping it out so it is the best approach
  sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users')
  attributes: Attributes<UserProps>

  // events: { [key: string]: fn[] } = {}
  constructor(data: UserProps) {
    this.attributes = new Attributes<UserProps>(data)
  }

  // pass through methods

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  get get() {
    return this.attributes.get
  }

  set(update: UserProps) {
    this.attributes.set(update)
    // notify other parts of our application that user just changed 
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.attributes.get('id')
    if (!id) throw new Error('Cannot fetch without an id')

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data)
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll()).then((response: AxiosResponse): void => {
      this.trigger('save')
    }).catch(() => {
      this.trigger('error')
    })
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