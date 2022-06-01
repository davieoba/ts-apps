import { Button } from '@mui/material'

export const MuiButton = () => {
  return (
    <>
      <div className='flex space-x-4 justify-center items-center'>
        <Button variant='contained' className='btn hover:bg-red-200 hover:text-black rounded-xl'> Text</Button>

        <Button variant='outlined' className='btn bg-red-500 rounded-xl'>outlined</Button>


      </div>
    </>
  )
}