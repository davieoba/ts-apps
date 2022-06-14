import { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Feed from './components/Feed/Feed'
import Rightbar from "./components/RightBar/RightBar"
import Navbar from "./components/Navbar/Navbar"
import { MuiGrid } from './components/Book/Grid/Grid'
import { MuiAppbar } from './components/Book/AppBar/Appbar'
import { MuiTextField } from "./components/TextField"
import { MuiDrawer } from './components/Book/Drawer/Drawer'
import { Form } from './components/Form/Form'


export const App = (): JSX.Element => {


  // const getData = (data: boolean): boolean => {
  //   drawerData = data
  //   return data
  // }

  // console.log(getData)


  return (
    <>
      {/* <Navbar />
      <div className='mt-10 flex flex-col md:flex-row md:space-x-10 justify-between'>
        <div className='hidden text-white md:block md:w-[200px]'>
          <Sidebar />
        </div>

        <div className="w-full text-white md:flex-1">
          <Feed />
        </div>

        <div className='hidden bg-slate-900 text-white md:block md:w-[200px]'>
          <Rightbar />
        </div>
      </div> */}
      {/* <MuiAppbar getData={(id: boolean) => { console.log(id) }} /> */}
      {/* <MuiGrid /> */}

      <MuiGrid>
        <MuiDrawer variant="temporary" />
      </MuiGrid>

      <Form />
    </>

  )
}
