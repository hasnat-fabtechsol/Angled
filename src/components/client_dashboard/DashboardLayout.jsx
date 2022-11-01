import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';




const DashboardLayout = () => {
return (


  <Box sx={{ display: "flex" }}>
  <CssBaseline />
  <Header />
  <Box
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
    }}
  >
    <Toolbar />
  
    


      <Outlet/>


      </Box>
      </Box>

)
};

export default DashboardLayout;