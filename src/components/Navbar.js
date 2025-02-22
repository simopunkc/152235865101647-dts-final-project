import { Article } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import UserLog from './UserLog';


const Navbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <Article sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
            }}
          >
            <Link style={{ color: 'steelblue', textDecoration: 'none' }} to="/?page=1">
              YuGiOh
            </Link>
          </Typography>
          <SearchBar />
          <Box sx={{ display: 'block' }}>
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
