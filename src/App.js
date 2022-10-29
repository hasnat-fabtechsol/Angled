import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/Main/LogIn';
import SignUp from './pages/Main/SignUp';
import Layout from './components/Layout'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ForgetPassPin from './pages/ForgetPassword/ForgetPassPin';
import ResetPassword from './pages/ForgetPassword//ResetPassword';
import AboutUs from './pages/Main/AboutUs';
import Home from './pages/Main/Home'
import Jobs from './pages/Main/Jobs';
import ContactUs from './pages/Main/ContactUs';
import { useContext, useEffect } from 'react';
import AuthContext from './auth/auth-context';
function App() {

  const auth = useContext(AuthContext);

  useEffect(() => {
// auth.logout()
    auth.login('hfhdsfhsddgfshfjkhh')
  

  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={auth.isLoggedIn?<Home />:<LogIn/>} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="contact-us" element={<ContactUs />} />
        
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="forget-pass-pin" element={<ForgetPassPin />} />
        <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
