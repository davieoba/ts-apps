import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react'

interface Props {
  variant?: 'permanent' | 'persistent' | 'temporary';
  onClose?: () => void;
  open?: boolean;
  anchor?: 'bottom' | 'left' | 'right' | 'top'
}

export const MuiDrawer = (props: Props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  return (
    <div>
      <Drawer {...props}>
        <List>
          <ListItem>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}