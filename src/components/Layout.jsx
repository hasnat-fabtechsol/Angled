import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from '../auth/auth-context';

import './styles/Layout.css'

const Layout = () => {
  const auth = useContext(AuthContext);
  const navigate=useNavigate()
  const [formEnable, setFormEnable] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);


return (


<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent  fixed-top  custom-navbar navbar-flow " ref={ref}>
    <div className={`container-fluid mx-sm-5 ${auth.userType&&"me-sm-0"}`}>
      <Link className="navbar-brand" to="/" >
      <img src={require("../assests/logo.png")} className="img-fluid logo_img_size"/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""><i class="bi bi-list"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" >
             <NavLink className="nav-link " end='/'  to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link "  to="/about-us">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/jobs">Jobs</NavLink>

          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"  to="/blogs">Our Blogs</NavLink>
          </li>


        </ul>


        <div className="row w-30 me-3">
          
          {auth.isLoggedIn?
          <><div className={`${auth.userType?"col-lg-3":"col-lg-6"} mb-3 mb-lg-0 text-white gx-0`} >



 <button onClick={()=>auth.logout()} class="web-btn clr-white bg-transparent border-wt ">Log out</button>
 

</div>
<div className={`${auth.userType?"col-lg-9":"col-lg-6"} mb-3 mb-lg-0 text-white  text-white gx-0`}>
<div className={`d-lg-flex justify-content-between   ${auth.userType&&"  gap-2 ps-lg-3"}`}>

{auth.userType&&<div><Link target="_blank" to={"/client/dashboard"}> <button  class=" btn-nav bg-blue clr-white me-1 mb-2"
  style={{ background: '#A98C4D' }}>{"Client"} Dashboard</button> </Link></div>}
<div><Link target="_blank" to={auth.userType?"/admin/dashboard":"/client/dashboard"}> <button  class="btn-nav bg-blue clr-white"
  style={{ background: '#A98C4D' }}>{auth.userType?"Admin":"Client"} Dashboard</button> </Link></div>
</div>
</div>
</>:<>
  
<div className="col-lg-6 mb-3 mb-lg-0 text-white  gx-0">



 <button onClick={()=>{
  if(isMobile)
  setOpen(true)
  else
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  navigate('/')
  setFormEnable(false)
  
  
  }} class="web-btn clr-white bg-transparent ">Login</button>

</div>
<div className="col-lg-6   text-white gx-0">

 <button onClick={()=>{
  if(isMobile)
  setOpen(true)
  else
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
 });
   navigate('/')
  setFormEnable(true)
 }} class="btn-nav bg-blue clr-white "
  style={{ background: '#A98C4D' }}>Get Started</button>
</div>
  </>}
        
         

        </div>
      </div>
    </div>
  </nav>
  <div style={{marginTop:height}}>

  <Outlet context={{open,setOpen,formEnable,setFormEnable}} />
  </div>

  
  <footer class=" text-white p-md-4 p-2">
    <div class=" container">
      <div className='row'>
        <div className='col d-flex justify-content-between'>
          <div><img src={require("../assests/logo.png")} className="img-fluid logo_img_size"/></div>
          <div>
           {!auth.isLoggedIn&& <button className='foot_button_color px-4 py-2' type='button' onClick={()=>{
  if(isMobile)
  setOpen(true)
  else
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
 });
   navigate('/')
  setFormEnable(true)
 }}>Sign Up</button>}
 </div>
        </div>
      </div>
    <hr className='text-dark'></hr>
      {/* <div class=""><img src={require('../assests/logo.png')}  className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} alt="Nav"/></div> */}
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 ps-lg-5">
          <p class="text-upper_case mt-2 text-dark">
            Fabtechsol is a web and mobile app development Company that believes 
              in making tomorrow’s world a better place. We focus on.
          </p>
          <div>
            <img src={require("../assests/twetter.png")} className="img-fluid img_size"/>
            <img src={require("../assests/facebook.png")} className="img-fluid mx-3 img_size"/>
            <img src={require("../assests/linkedin.png")} className="img-fluid me-3 img_size"/>
            <img src={require("../assests/instagram.png")} className="img-fluid img_size"/>

            <div className='text-dark text-upper_case mt-3'>© 2022 all rights reserved</div>
          </div>
        </div>
        <div class="col-12 col-lg-8  mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
        <div className='row justify-sm-content-center'>
          <div className='col-6 col-sm-3 style-none'>
            <h5 class="mb-4 text-dark">About Us</h5>
            <a href="#"><p>About Us</p></a>
            <a href="#"><p>Blog Post</p></a>
            {/* <a href="#"><p>Heading</p></a> */}
          </div>
          <div className='col-6 col-sm-3 style-none'>
            <h5 class="mb-4 text-dark">Services</h5>
            <a href="#"><p>Job Search</p></a>
            <a href="#"><p>Our clients</p></a>
            {/* <a href="#"><p>Heading</p></a> */}
          </div>
          <div class="col-sm-6  my-auto gx-0 style-none">
            <form>
              <div class="d-flex">
                <input class="form-control email_color email_width" type="email" name="" placeholder="Email" required/>
                <button class="btn email_color" type="submit" value="Submit"><img src={require("../assests/send.png")} className="img-fluid"/></button>
              </div>
            </form>
            <div class="d-flex mt-4">
              <img src={require("../assests/phone_icon.png")} style={{ height:'40px', width:'40px'}} className="img-fluid"/>
              <div style={{ fontSize: '12px'}} class="ms-2 text-dark">
                <label for="">+92 318 232 232 3</label>
                <p>Contacts@storeks.com</p>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  </footer>

</>
)
};

export default Layout;