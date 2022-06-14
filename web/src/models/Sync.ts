import axios, { AxiosPromise } from "axios"
// import { UserProps } from "./User"


interface PropsId {
  id?: number
}

export class Sync<T extends PropsId> {
  rootURL: string

  constructor(rootUrl: string) {
    this.rootURL = rootUrl
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`)
  }

  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      return axios.put(`${this.rootURL}/${id}`, data)
    } else {
      return axios.post(this.rootURL, data)
    }

  }
}

// 'JetBrains Mono medium'

// note: the codes have been modified but this is the thought process

// the fetch does not have this.set on it so I changed it to return a promise that would be resolved by the User class and which also has the necessary methods

// the save method does not alert us that the user has been persisted in the backend, so I return a promise so that I can find out from the result of that promise if the user was persisted or not,
// note: I think I can also write the code here to find out if the data was persisted but perhaps for uniformity sake let us do it all in the User class