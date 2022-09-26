import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import NavMenu from '../NavMenu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 'auto' }}
          >
            <img src="images/pushin-logo-banner.svg" alt="" height="45px"/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavMenu />
    </Box>
  );
}