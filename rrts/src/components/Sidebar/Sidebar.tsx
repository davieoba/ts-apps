import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Switch from '@mui/material/Switch';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { useState } from 'react'


function Sidebar(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <div className=''>
      <div className='fixed mt-10'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Inbox' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Pages' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Groups' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Marketplace' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Friends' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Settings' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <ListItemText primary='Profile' sx={{ color: 'skyblue' }} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NightlightIcon sx={{ color: 'skyblue' }} />
              </ListItemIcon>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;

