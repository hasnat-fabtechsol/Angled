import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Jobs.css'

function ContactUs(props) {
return (
<section className="container">
    <div className="position-relative d-flex justify-content-start align-items-center rounded mt-5 mb-3 jobs-poster"

        >
        <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">Contact Us</h1>
            <Link  style={{textDecoration:'none'}}  to='#'><button className="web-btn bg-orangeJuice clr-white me-4">Apply Now</button></Link>
              <Link style={{textDecoration:'none'}} to='/signup'> <button className="web-btn clr-white bg-transparent border-wt">Register</button></Link> 
    
        </div>
    </div>
    <div className="row">
        <div className="col-md-6 col-12 mb-3">
            <img src={require('../../assests/contactUs.png')} alt="contactUs" style={{ width: '100%' }} />
            
                </div>
        <div className="col-md-6 col-12 mb-5">
            <div className="mt-2 mb-2" />
            <div><input className="mb-4" type="text" name="fname" id="fname" placeholder="First Name"
                     /><input className="mb-4" type="text" name="lname" id="lname" placeholder="Last Name"
                     /><input className="mb-4" type="email" name="email" id="email"
                    placeholder="Email address"  /><input className="mb-4" type="text" name="title"
                    id="title" placeholder="Title"  /><textarea className="mb-4" name="tInfoRequest"
                    id="tInfoRequest" cols={30} rows={10} placeholder="Comments"  /><button className="web-btn w-100 py-2 bg-sky clr-white">Submit</button></div></div></div></section>
    );
}

export default ContactUs;