import { AppBar, Slide, useScrollTrigger } from "@mui/material"
import { Toolbar } from "@mui/material"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

interface AppbarProps {
  children?: React.ReactNode,
  getData: (data: boolean) => boolean
}

export const MuiAppbar: React.FC<AppbarProps> = ({ children, getData }: AppbarProps) => {
  const trigger = useScrollTrigger()
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleOpen = () => {
    setOpenMenu(prev => !prev)
  }

  // the state for the drawer
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  function handleDrawer() {
    setOpenDrawer(prev => !prev)
    // return getData(openDrawer)
  }

  // console.log(openDrawer)

  // //////////////////////

  interface ButtonProps {
    variant?: 'outlined' | 'contained' | 'text';
    text: string;
  }

  const MyButton = function ({ variant, text }: ButtonProps) {
    // console.log(variant)
    return (
      <Button variant={variant} onClick={handleDrawer}>
        {text}
      </Button>
    )
  }

  return (
    <div>
      <Slide in={!trigger}>
        <AppBar position='fixed' className='bg-rose-500 '>
          <Toolbar variant='dense' className='flex justify-between'>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon onClick={handleOpen} />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>

            <MyButton variant="outlined" text='open drawer' />
          </Toolbar>
        </AppBar>
      </Slide>

      <Menu open={openMenu} onClose={() => setOpenMenu(false)}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 170, left: 10 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }} className='mt-3'>
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </div>
  )
}