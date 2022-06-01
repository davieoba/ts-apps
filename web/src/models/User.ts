interface UserProps {
  username?: string,
  age?: number
}

type fn = () => {}

export class User {
  data: UserProps
  constructor(data: UserProps) {
    this.data = data
  }

  get(propName: string): (string | number) {
    return this.data[propName]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: fn) { }
}