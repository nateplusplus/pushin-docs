import * as React from 'react';
import {
  Box,
  Container
} from '@mui/material';

import Navbar from "../Navbar";

export default function PageLayout({id, children}) {
  id = id ? id : 'pushinPageLayout';

  return (
    <Box id={id}>
      <Navbar />
      <Container sx={{
      marginTop: '4rem',
      marginBottom: '6rem'
    }}>
        {children}
      </Container>
    </Box>
  );
}