import { useEffect } from 'react';
import React,{useContext} from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';


import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/auth-context';

const drawerWidth = 240;

function AdminSideNav(props) {
  const { window } = props;
  const auth = useContext(AuthContext);

  const navigate=useNavigate()

  

  const listItemData = [
    { label: "Dashboard", icon: <DashboardIcon />, link: "/admin/dashboard" },,
    { label: "New Job", icon: <AddBoxIcon />, link: "/admin/new-job" },
    { label: "Invoices", icon: <ReceiptIcon />, link: "/admin/invoices" },
    { label: "Blogs", icon: <ReceiptIcon />, link: "/admin/blogs" },
  ];

  const drawer = (
    <div  >
      <Toolbar />
      <Divider />
      <List>
        {listItemData.map((value, i) => (
          <ListItem key={i} component={NavLink} to={value.link}  disablePadding sx={{ color: 'inherit' }} >
            <ListItemButton>
              <ListItemIcon >{value.icon}</ListItemIcon>
              <ListItemText primary={value.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding  onClick={()=>{
          
          auth.logout()
          navigate('/')
          }}>
          <ListItemButton >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
        

            <ListItemText primary={"Logout"}  />
         
         
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: {md: 1000, xs: 1200} },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: {md: 1000, xs: 1200} },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  );
}

AdminSideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminSideNav;

  // import { styled } from '@mui/material';
//   const ListItem = styled('a')(
//     ({ theme }) => `
//     color: inherit;
//   `,
//   );
