import { Box } from '@mui/material';
import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSideNav from './AdminSideNav';
import SideNav from './AdminSideNav';
function AdminHeader(props) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div>
            <AdminNavbar handleDrawerToggle={handleDrawerToggle} />
            <AdminSideNav mobileOpen={mobileOpen} handleDrawerToggle={() => handleDrawerToggle()} />
         
        </div>



    );
}

export default AdminHeader;