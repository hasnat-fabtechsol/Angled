import { AppBar ,Hidden,IconButton,Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'

  function AdminNavbar({handleDrawerToggle}) {
    
  
    return (

  
    <Box sx={{ flexGrow: 1 }}>
           <AppBar position="fixed" sx={{ backgroundColor: "#000f30" }}>
  <Toolbar variant="dense" style={{display:'flex',
    justifyContent:'space-between',minHeight:'65px'}} >
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
   
    <Typography variant="h6" color="inherit" component="div">
    {"<AdminPanel/>"}
    </Typography>

    </IconButton>
    <Box 
    >

      <Hidden
      mdDown
      >
        <Typography  variant='h6' >Welcome to Admin</Typography>
      </Hidden>

  

    </Box>
    <Box >



<Hidden
mdUp
>
  <IconButton onClick={handleDrawerToggle}>
    <MenuIcon/>
  </IconButton>
  </Hidden>

</Box>
  </Toolbar>
</AppBar>
        </Box>
    );
}

export default AdminNavbar;