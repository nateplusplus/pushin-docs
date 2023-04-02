import * as React from 'react';
import {
  Box,
  Button,
  Container
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import Navbar from "../Navbar";

export default function PageLayout({id, padded = true, children}) {
  id = id ? id : 'pushinPageLayout';

  return (
    <Box id={id}>
      <Navbar />
      { padded && <Box className="navbar-spacer" sx={{ height: '70px' }}/> }
      <Container
        sx={{
          marginTop: padded ? '4rem' : '0',
          marginBottom: padded ? '6rem' : '0',
          maxWidth: padded ? '1200px' : '100% !important',
          padding: padded ? '0 24px' : '0 !important',
        }}
      >
        {children}
      </Container>
      <Button
        variant="outlined"
        size="small"
        component='a'
        href="https://github.com/nateplusplus/pushin"
        target="_blank"
        rel="noreferrer noopener nofollow"
        startIcon={<GitHubIcon />}
        sx={{
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          background: 'white'
        }}>
        View on GitHub
      </Button>
    </Box>
  );
}