import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Footer = () => {
  return (
    <Box sx={{ display: 'block', mt: 5 }}>
      <Typography
        variant="h6"
        sx={{
          backgroundColor: 'lemonchiffon',
          flexGrow: 1,
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
