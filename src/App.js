import './App.css';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Layout from './components/Layout'
import {ForgetPassword,ForgetPassPin,ResetPassword} from './pages/ForgetPassword';
import {Home,AboutUs,Jobs,ContactUs,LogIn,SignUp} from './pages/Main'
import { useContext, useEffect, useState } from 'react';
import AuthContext from './auth/auth-context';
import { DashboardLayout } from './components/client_dashboard';
import { AdminDashboardLayout } from './components/admin_dashboard';
import { Dashboard, Reports } from './pages/client';
import { AdminDashboard, Invoices, NewJob } from './pages/admin';
import isHospital from './hooks/IsHospital'
import ApplyNow from './pages/Main/ApplyNow';
import Blogs from './pages/Main/Blogs';
function App() {

  const auth = useContext(AuthContext);


    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />

          <Route path="jobs/apply-now" element={<ApplyNow />} />
        
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="forget-pass-pin" element={<ForgetPassPin />} />
        <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/" element={<DashboardLayout/>}>
          <Route index path='/client/dashboard' element={<Dashboard />} />
          <Route path='client/reports' element={<Reports />} />
 
      
        </Route>

        <Route path="/" element={<AdminDashboardLayout/>}>
          <Route index path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/new-job' element={<NewJob />} />
          <Route path='/admin/invoices' element={<Invoices />} />
      
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


