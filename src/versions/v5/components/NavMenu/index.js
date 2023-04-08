import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
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
import { paths } from '../../routes';

export default function NavMenu({collapsed, menuToggle}) {

  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props} />
  ));

  function listItem( text, route, icon ) {
    return (
      <ListItem>
        <ListItemButton to={route} component={LinkBehavior}>
          {icon &&
            <ListItemIcon>
              {icon}
            </ListItemIcon>
          }
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
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
        {listItem('About', paths.home, <HomeIcon />)}
        {listItem('Installation', paths.installation, <InfoIcon />)}
        {listItem('API reference', paths.api, <CodeIcon />)}
        {listItem('Composition', paths.composition, <WidgetsIcon />)}
        {listItem('Target', paths.target, <ModeStandbyIcon />)}
        <Divider />
        <ListSubheader>Examples</ListSubheader>
        {listItem('Simple (zero config)', paths.simple)}
        {listItem('Responsive design', paths.responsive)}
        {listItem('Building a scene with images', paths.cat)}
      </List>
    </Drawer>
  );
}