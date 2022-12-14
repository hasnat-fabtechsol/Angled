import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import AuthContext from '../../auth/auth-context';
import Header from './Header';




const DashboardLayout = () => {
  const auth = useContext(AuthContext);
  const navigate=useNavigate()
  useEffect(()=>{
   if(!auth.isLoggedIn)
          navigate('/')
          
  },[])
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