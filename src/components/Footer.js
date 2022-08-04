import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Footer = () => {
  return (
    <Box sx={{ display: 'block', mt: 5 }}>
      <Typography
        variant="h6"
        sx={{
          backgroundColor: '#222',
          flexGrow: 1,
          color: 'darkseagreen',
          fontSize: '14px',
          textAlign: 'center',
          padding: 5,
          display: 'block',
          fontFamily: 'monospace',
          fontWeight: 500,
          letterSpacing: '.3rem',
        }}
      >
        Made with ❤️ by Budiyanto REA2B
      </Typography>
    </Box >
  );
}

export default Footer;
