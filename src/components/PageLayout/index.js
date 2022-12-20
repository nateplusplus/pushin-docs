import * as React from 'react';
import {
  Box,
  Button,
  Container
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';

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