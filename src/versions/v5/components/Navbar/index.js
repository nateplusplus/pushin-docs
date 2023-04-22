import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Select,
    InputLabel,
    FormControl,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from "react-router-dom";
import { paths } from '../../routes';
import Logo from '../../images/pushin-logo.svg';
import { VERSIONS } from '../../../../constants';

import NavMenu from '../NavMenu';

export default function Navbar() {
  const location = useLocation();
  const versionPath = location.pathname.match(/v\d+|latest/) ?? 'latest';

  const [ collapsed, setCollapsed ] = useState(true);
  const version = versionPath;

  function menuToggle() {
    setCollapsed(!collapsed);
  }

  function versionChange(event) {
    const page = location.pathname.replace( `${versionPath}/`, '' );
    const value = event.target.value === 'latest' ? '' : event.target.value;
    window.location = `${value}${page}`;
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
                to={paths.home}
                size="large"
                edge="start"
                color="inherit"
                variation="text"
                startIcon={<img src={Logo} alt="" height="45px"/>}
                aria-label="menu"
                sx={{
                  marginRight: '2.5rem',
                  textDecoration: 'none',
                  color: '#2d2d2d',
                  fontSize: '0.8rem'
                }}
            >
              PushIn.js
            </Button>
            <FormControl
              size="small"
              sx={{
                marginRight: 'auto',
                textDecoration: 'none',
                minWidth: '110px'
              }}
            >
              <InputLabel id="version-label" sx={{ fontSize: '0.9rem' }}>version</InputLabel>
              <Select
                labelId="version-label"
                id="version-select"
                value={version}
                onChange={versionChange}
                label="version"
                sx={{ color: '#444', fontSize: '0.8rem' }}
              >
                { VERSIONS.map( (version, index) => <MenuItem key={`v-${index}`} value={version.value}>{version.label}</MenuItem> ) }
              </Select>
            </FormControl>
            <Button
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              endIcon={<MenuIcon />}
              sx={{ mr: 2, fontSize: '0.8rem', ml: 1 }}
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