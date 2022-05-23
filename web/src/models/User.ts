interface UserProps {
  username?: string,
  age?: number
}

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
}