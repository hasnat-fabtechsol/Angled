import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import AdminHeader from './AdminHeader';
import Header from './AdminHeader';




const AdminDashboardLayout = () => {
return (


  <Box sx={{ display: "flex" }}>
  <CssBaseline />
  <AdminHeader />
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

export default AdminDashboardLayout;