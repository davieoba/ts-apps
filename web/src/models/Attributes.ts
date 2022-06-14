

export class Attributes<T> {
  data: T

  constructor(data: T) {
    this.data = data
  }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T): void {
    console.log(this.data)
    Object.assign(this.data, update)
  }

  getAll(): T {
    return this.data
  }
}


