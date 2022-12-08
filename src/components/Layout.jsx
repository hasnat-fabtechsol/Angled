import React, { useContext, useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import AuthContext from '../auth/auth-context';

import './styles/Layout.css'

const Layout = () => {
  const auth = useContext(AuthContext);
  const [formEnable, setFormEnable] = useState(false);

return (

<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent  fixed-top  custom-navbar navbar-flow ">
    <div className="container-fluid mx-5 ">
      <Link className="navbar-brand" to="/" >
      <img src={require("../assests/logo.png")} className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
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


        </ul>


        <div className="row w-30 me-3">
          
          {auth.isLoggedIn?
          <><div className="col-lg-6 mb-3 mb-lg-0 text-white ">



 <button onClick={()=>auth.logout()} class="web-btn clr-white bg-transparent border-wt ">Log out</button>
 

</div>
<div className="col-lg-6 mb-3 mb-lg-0 text-white  text-white">


<Link  to={auth.userType==true?"/admin/dashboard":"/client/dashboard"}> <button  class="btn-nav bg-blue clr-white"
  style={{ background: '#A98C4D' }}>{auth.userType==true?"Admin":"Client"} Dashboard</button> </Link>
</div>
</>:<>
  
<div className="col-lg-6 mb-3 mb-lg-0 text-white ">



 <button onClick={()=>setFormEnable(false)} class="web-btn clr-white bg-transparent ">Login</button>

</div>
<div className="col-lg-6   text-white">

 <button onClick={()=>setFormEnable(true)} class="btn-nav bg-blue clr-white "
  style={{ background: '#A98C4D' }}>Get Started</button>
</div>
  </>}
        
         

        </div>
      </div>
    </div>
  </nav>
  <Outlet context={{formEnable,setFormEnable}} />

  <footer class=" linear-gradient-lr text-white p-md-4 p-2">
    <div class=" container">
      <div class=""><img src={require('../assests/logo.png')}  className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} alt="Nav"/></div>
      <div class="row">
        <div class="col-md-6 col-12 mb-3">In publishing and graphic design, Lorem ipsum is a placeholder text commonly
          used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</div>
        <div class="col-md-6 col-12 d-flex justify-content-around gap-2 flex-wrap">
          <div class="mb-2">
            <h5 class="mb-4">Heading</h5>
            <p>Heading</p>
            <p>Heading</p>
            <p>Heading</p>
          </div>
          <div class="mb-2">
            <h5 class="mb-4">Heading</h5>
            <p>Heading</p>
            <p>Heading</p>
            <p>Heading</p>
          </div>
          <div class="mb-2">
            <h5 class="mb-4">Heading</h5>
            <p>Heading</p>
            <p>Heading</p>
            <p>Heading</p>
          </div>
        </div>
      </div>
    </div>
  </footer>

</>
)
};

export default Layout;