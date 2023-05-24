import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function HeaderToDoList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My ToDoList
          </Typography>
          <Button href='/perfil' color='inherit'>
          <AccountCircle/>
          </Button>
          <Button href='/home' color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

