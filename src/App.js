import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedRoute from './components/ProtectedRoute';
import Resume from './pages/client/Resume';
import AdminProtectedRoute from './components/AdminProtectedRoute';
import JobDetail from './pages/admin/JobDetail';
import ActiveJobDetail from './pages/admin/ActiveJobDetail';
import AddNew from './pages/client/AddNew';
import AssignJob from './pages/admin/AssignJob';
import ActiveSubmittalDetail from './pages/client/ActiveSubmittalDetail';
import CurrentlyWorkingDetail from './pages/client/CurrentlyWorkingDetail';
import CreateInvoice from './pages/admin/CreateInvoice';
import BlogsDashboard from './pages/admin/BlogsDashboard';
import BlogDetail from './pages/Main/BlogDetail';

function App() {

 
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/detail/:id" element={<BlogDetail />} />

          <Route path="jobs/apply-now/:id" element={<ApplyNow />} />
        
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="forget-pass-pin" element={<ForgetPassPin />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/" element={
        <ProtectedRoute>
        <DashboardLayout/>
         </ProtectedRoute>}>
          <Route index path='/client/dashboard' element={<Dashboard />} />
          <Route index path='/client/add-new/:id' element={<AddNew/>} />
          <Route path='/client/reports' element={<Reports />} />
          <Route path='/client/active-job/:id' element={<ActiveSubmittalDetail />} />
          <Route path='/client/currently-working/:id' element={<CurrentlyWorkingDetail />} />
          <Route path='/client/resume'
           element={<AdminProtectedRoute><Resume/> </AdminProtectedRoute> } />
          <Route path="client/*" element={<Navigate to="/client/dashboard" replace />} />
 
      
        </Route>

        <Route path="/" element={
         <ProtectedRoute>
          <AdminProtectedRoute>

        <AdminDashboardLayout/>
          </AdminProtectedRoute>
         </ProtectedRoute>}>
          <Route index path='/admin/dashboard' element={<AdminDashboard /> }/>
          <Route path='/admin/new-job' element={<NewJob />} />
          <Route path='/admin/blogs' element={<BlogsDashboard />} />
          <Route path='/admin/blog/detail/:id' element={<BlogDetail />} />
          <Route path='/admin/invoices' element={<Invoices />} />
          <Route path='/admin/new-job/:id' element={<JobDetail />} />
          <Route path='/admin/active-job/:id' element={<ActiveJobDetail />} />
          <Route path='/admin/active-job/invoice/:id' element={<CreateInvoice />} />
          <Route path='/admin/new-job/assign/:id' element={<AssignJob />} />
          <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

