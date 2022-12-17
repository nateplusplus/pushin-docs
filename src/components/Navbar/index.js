import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import Logo from '../../images/pushin-logo-banner.svg';

import NavMenu from '../NavMenu';

export default function Navbar() {
  const [ collapsed, setCollapsed ] = useState(true);

  function menuToggle() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          zIndex: 1000,
          position: 'fixed',
          width: '100%',
          top: 0
        }}
      >
        <AppBar color="default" position="static">
          <Toolbar>
            <Link to="/" style={{ marginRight: 'auto' }}> 
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <img src={Logo} alt="" height="45px"/>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={menuToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <NavMenu collapsed={collapsed} menuToggle={menuToggle} />
      </Box>
      <Box className="navbar-spacer" sx={{ height: '70px' }}/>
    </>
  );
}