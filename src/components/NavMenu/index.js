import * as React from 'react';
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CodeIcon from '@mui/icons-material/Code';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function NavMenu({collapsed, menuToggle}) {

  function handleRoute(route) {
    if (route) {
      console.log(route);
    }
  }

  function listItem( text, route, icon ) {
    return (
      <Link to={route}>
        <ListItem>
            <ListItemButton onClick={() => handleRoute()}>
              {icon &&
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
              }
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
      </Link>
    );
  };

  return (
    <Drawer
      anchor={'right'}
      open={!collapsed}
      onClose={menuToggle}
    >
      <ListItem>
        <IconButton onClick={menuToggle}>
          <ChevronRightIcon />
        </IconButton>
      </ListItem>
      <Divider />
      <List dense={true} sx={{ mr: 2 }}>
        <ListSubheader>Getting started</ListSubheader>
        {listItem('About', '/', <HomeIcon />)}
        {listItem('Installation', '/installation', <InfoIcon />)}
        {listItem('Composition', '/composition', <WidgetsIcon />)}
        {listItem('Target', '/target', <ModeStandbyIcon />)}
        {listItem('API reference', '/api', <CodeIcon />)}
        <Divider />
        <ListSubheader>Examples</ListSubheader>
        {listItem('Simple (zero config)', '/examples/simple')}
        {listItem('Responsive design', '/examples/responsive')}
        {listItem('Building a scene with images', '/examples/cat')}
      </List>
    </Drawer>
  );
}