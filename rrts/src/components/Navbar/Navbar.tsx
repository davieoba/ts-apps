import styled from "@emotion/styled";
import { AppBar, Avatar, InputBase, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MuiTextField } from "../TextField";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: 8,
  paddingLeft: 10,
  paddingRight: 10,
  width: 300
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 20
}))

const UserIcon = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: 20
}))

function Navbar(): JSX.Element {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const handleClick = (): void => {
    setOpenMenu(prev => !prev)
  }

  return (
    <div>
      <div >
        <AppBar position='fixed'>
          <StyledToolbar>
            <Typography >Bodunrin</Typography>
            <Search className="md:w-[400px]"> <InputBase sx={{ width: '100%' }} placeholder='search ...' /> </Search>
            <div className="flex">
              <Icons className='hidden md:flex md:items-center md:justify-center'>
                <Badge badgeContent={4} color="error" max={99}>
                  <MailIcon color="secondary" />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon color="secondary" />
                </Badge>
                <Avatar sx={{ height: 30, width: 30 }} onClick={handleClick}>D</Avatar>
              </Icons>
              <UserIcon className='flex md:hidden md:justify-center md:items-center' onClick={handleClick}>
                <Avatar sx={{ height: 30, width: 30 }}>D</Avatar>
                <Typography> David </Typography>
              </UserIcon>
            </div>
          </StyledToolbar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={openMenu}
            onClose={(e) => setOpenMenu(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
        </AppBar>
      </div>
    </div>
  );
}

export default Navbar;