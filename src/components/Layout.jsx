import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import AuthContext from '../auth/auth-context';




const Layout = () => {
  const auth = useContext(AuthContext);
return (

<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid linear-gradient-lr">
      <Link className="navbar-brand" to="/">
      <img src={require("../assests/logo.png")} className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/jobs">Jobs</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contact-us">Contact Us</Link>
          </li>


        </ul>


        <div className="row w-30 me-3">
          
          {auth.isLoggedIn?
          <><div className="col-lg-6 mb-3 mb-lg-0 text-white ">



 <button onClick={()=>auth.logout()} class="web-btn clr-white bg-transparent border-wt ">Log out</button>
 

</div>
<div className="col-lg-6 mb-3 mb-lg-0 text-white  text-white">


<Link  to={auth.userType==true?"/admin/dashboard":"/client/dashboard"}> <button  class="web-btn bg-wood clr-white ms-0"
  style={{ background: '#A98C4D' }}>{auth.userType==true?"Admin":"Client"} Dashboard</button> </Link>
</div>
</>:<>
  
<div className="col-lg-6 mb-3 mb-lg-0 text-white ">



<Link to="/login"> <button class="web-btn clr-white bg-transparent border-wt">Login</button>
</Link>
</div>
<div className="col-lg-6   text-white">


<Link  to="/signup"> <button class="web-btn bg-wood clr-white "
  style={{ background: '#A98C4D' }}>Register</button> </Link>
</div>
  </>}
        
         

        </div>
      </div>
    </div>
  </nav>
  <Outlet />
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