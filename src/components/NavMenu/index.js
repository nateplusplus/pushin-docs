import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CodeIcon from '@mui/icons-material/Code';

export default function NavMenu() {
  return (
    <Drawer
      anchor={'right'}
      open={true}
    >
      <List sx={{ mr: 2 }}>
        <ListSubheader>Getting started</ListSubheader>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Installation" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <WidgetsIcon />
            </ListItemIcon>
            <ListItemText primary="Composition" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ModeStandbyIcon />
            </ListItemIcon>
            <ListItemText primary="Target" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="API reference" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListSubheader>Examples</ListSubheader>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Simple (zero config)" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Responsive design" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Building a scene with images" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}