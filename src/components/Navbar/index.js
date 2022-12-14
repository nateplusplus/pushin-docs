import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from "react-router-dom";

import Logo from '../../images/pushin-logo.svg';

import NavMenu from '../NavMenu';

export default function Navbar() {
  const [ collapsed, setCollapsed ] = useState(true);

  function menuToggle() {
    setCollapsed(!collapsed);
  }

  const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} {...props} />
  ));

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
            <Button
                component={LinkBehavior}
                to="/"
                size="large"
                edge="start"
                color="inherit"
                variation="text"
                startIcon={<img src={Logo} alt="" height="45px"/>}
                aria-label="menu"
                sx={{
                  marginRight: 'auto',
                  textDecoration: 'none',
                  color: '#2d2d2d'
                }}
            >
              PushIn.js
            </Button>
            <Button
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              endIcon={<MenuIcon />}
              sx={{ mr: 2 }}
              onClick={menuToggle}
            >
              Menu
            </Button>
          </Toolbar>
        </AppBar>
        <NavMenu collapsed={collapsed} menuToggle={menuToggle} />
      </Box>
      <Box className="navbar-spacer" sx={{ height: '70px' }}/>
    </>
  );
}