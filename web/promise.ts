// function delayedPromise(): Promise<void>{
//   return new Promise<void>((resolve: () => void, reject) => {
//     function afterTimeout(){
//       resolve()
//     }

//     setTimeout(afterTimeout, 1000)
//   })
// }

// const resolveDelay = delayedPromise().then(() => {
//   console.log('promise is resolved')
// })

// function errorPromise(val?: string ): Promise<void>{
//   return new Promise<void>((resolve, reject) => {
//     function sendError(){
//       if (val === undefined){
//         reject()
//       }
//       else{
//         resolve()
//       }
//     }

//     setTimeout(sendError, 1000)
//   })
// }

// errorPromise().then(() => {
//   console.log('a value was passed')
// }).catch((err) => {
//   console.log(err)
//   console.log('an error occurred')
// })

// function promiseReturnString(throwError: boolean):Promise<string>{
//   return new Promise<string>((resolve: (val: string) => void, reject: (val: number) => void) => {
//     if (throwError === true){
//       reject(404)
//     }else {
//       resolve('200 success')
//     }
//   })
// }

// promiseReturnString(true).then((data) => {console.log(data)}).catch((data) => console.log(data))

interface IConnection {
  server: string;
  port: number;
}

interface IError {
  code: number;
  message: string;
}

interface IDataRow {
  id: number;
  name: string;
  surname: string;
}

function complexPromise(connection: IConnection, accessKey: string): Promise<IDataRow> {
  return new Promise<IDataRow>((resolve: (result: IDataRow) => void, reject: (result: IError) => void) => {
    if (connection.port === 3000 && connection.server === 'running') {
      resolve({
        id: 1,
        name: 'David',
        surname: 'Bodunrin'
      })
    } else {
      reject({
        code: 404,
        message: 'not found'
      })
    }
  })
}

const connection: IConnection = {
  port: 3000,
  server: 'stop'
}

// complexPromise(connection, 'abc').then((data: IDataRow) => {
//   console.log(data)
// }).catch((err: IError) => {
//   console.log(err)
// })

function delayedPromise(throwErr: boolean): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
    if (throwErr === false) {
      return reject()
    } else {
      return resolve()
    }
  })
}

// delayedPromise(false).then(() => {
//   console.log('resolved the code')
// }).catch((err) => {
//   console.log('an error occured')
// })

// async and await 
async function callDelayedFn() {
  try {
    const data = await complexPromise(connection, 'abc')
    console.log(data)
  } catch (err) {
    console.log(err)
  }

}

callDelayedFn()