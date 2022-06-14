import { createContext, useState } from 'react'

const DrawerContext = createContext<null>(null)

interface ValueProps {
  data: boolean
}

// export const DrawerProvider = ({ children }: any) => {
//   const [data, setData] = useState<ValueProps>()



//   return <DrawerContext.Provider value={ data }> { children } < /DrawerContext.Provider>
// }

// export default DrawerContext