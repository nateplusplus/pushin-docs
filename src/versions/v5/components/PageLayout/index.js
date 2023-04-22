import * as React from 'react';
import {
  Box,
  Button,
  Container
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import Navbar from "../Navbar";

export default function PageLayout({id, children}) {
  id = id ? id : 'pushinPageLayout';

  return (
    <Box id={id}>
      <Navbar />
      <Container
        sx={{
          marginTop: '4rem',
          marginBottom: '6rem'
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