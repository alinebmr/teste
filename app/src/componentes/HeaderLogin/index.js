import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./styles.css"

export default function HeaderLogin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My ToDoList
          </Typography>
          <Button href='/signup' color='inherit'>Cadastro</Button>
          <Button href='/' color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

