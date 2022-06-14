

type fn = () => void

export class Eventing {
  firstName: string
  lastName: string;

  events: { [key: string]: fn[] } = {}
  on = (eventName: string, callback: fn): void => {
    // if this.events[eventName] = undefined then handlers should be an []
    // console.log(this.events[eventName])
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string) => {
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