import TextField from "@mui/material/TextField"

export const MuiTextField = () => {
  return (
    <>
      <div className="flex flex-col  space-y-7 items-center justify-center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" className="dave-input w-[300px]" required sx={{
          label: {
            '&.Mui-focused': {
              color: 'white',
            }
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              // border: 'none',
              borderColor: 'orange',
            },
            '&:hover fieldset': {
              // border: 'none',

              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              // border: 'none',

              borderColor: 'white',
            },
          }
        }} />

      </div>
    </>
  )
}