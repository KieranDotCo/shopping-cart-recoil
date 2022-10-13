import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import CartButton from '../CartButton/CartButton';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <CartButton/>
          <Button sx={{marginLeft: '2rem'}} color="inherit" startIcon={<GitHubIcon/>} href="https://github.com/KieranDotCo/shopping-cart-recoil">Github</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
