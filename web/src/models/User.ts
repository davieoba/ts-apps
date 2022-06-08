interface UserProps {
  username?: string,
  age?: number;
}

// note: for this code below I am telling ts that this function would return an object // type fn = () => {}

type fn = () => void

export class User {
  data: UserProps
  events: { [key: string]: fn[] } = {}

  constructor(data: UserProps) {
    this.data = data
  }

  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: fn): void {
    // if this.events[eventName] = undefined then handlers should be an []
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string) {
    // I want to know if there are any callbacks to be run inside the this.events[eventName] ~ would be equal to an array
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach((el) => {
      el()
    })

  }
}


// note: for the on method, I think what we are trying to do is to create and store all the possible list of events that this project can have and then be able to call those methods at at future point in time.

//note: events above the type definition explanation: events is going to be an object but I do not know the property names, that is why it has [key:string], so whatsoever propery(ies) it has would be equal to the array of callback function, "we just dont know what are the properties this object would have but we know that it is an object" example: this.events['name'] = [callback() => {}]
