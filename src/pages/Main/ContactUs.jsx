import { Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Contact_Us.css'

function ContactUs(props) {
return (
<div>
  <div className="container-fluid py-5">
    <div className="row back_img my-3 mx-0 mx-sm-4">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto">
        <h1 className="Hfs_16">Contact Us</h1>
        <button type="button" className="px-4 py-2 mt-3 Contact_btn">Sign in to Apply</button>
        <img  src={require("../../assests/Blogs/play-circle.png")} alt="" className="play_img ms-3" />
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="container gap-3">
          <div className="row">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img  src={require("../../assests/ContactUs/OurPartner_1.png")} className="OurPartner_style" alt="" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img src={require("../../assests/ContactUs/OurPartner_2.png")} className="OurPartner_style" alt="" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img src={require("../../assests/ContactUs/OurPartner_3.png")} className="OurPartner_style" alt="" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img src={require("../../assests/ContactUs/OurPartner_4.png")} className="OurPartner_style" alt="" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img src={require("../../assests/ContactUs/OurPartner_5.png")} className="OurPartner_style" alt="" />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 text-sm-start text-center mt-4">
              <img src={require("../../assests/ContactUs/OurPartner_6.png")} className="OurPartner_style" alt="" />
            </div>
            {/* <div class="about_background m-3 px-5">
          <img src="./about_background_img.png" class="img-fluid" alt="">
          <div class="top_left"><h2>The largest and most powerful PRN  platform in the industry.</h2></div>  
          <div><p>You have joined one of the area’s newest innovative company.</p></div>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row pb-5">
      <div className="col-md-9 text-center text-md-start WHY_JOIN_ANGLED">
        <h2>WHY JOIN ANGLED INC</h2>
        <p>To be trusted as the most devoted place to provide quality healthcare and financial solutions.</p>
      </div>
      <div className="col-md-3 text-center text-md-start my-auto pb-5"><button className="px-5 py-2 btn btn-outline-primary">Join</button></div>
    </div>
    <div className="row">
      <div className="col-md-6 ">
        <form>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <input type="text" className="form-control" placeholder="Enter email" name="email" />
            </div>
            <div className="col-sm-6 mb-4">
              <input type="password" className="form-control" placeholder="Enter password" name="pswd" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <input type="text" className="form-control" placeholder="Enter email" name="email" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary px-3 mb-4">Send Message</button>
        </form>
      </div>
      <div className="col-12 col-sm-12 col-md-6 text-md-end">
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26929
      .46160856411!2d74.51489379999997!3d32.46780470000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i
      768!4f13.1!3m3!1m2!1s0x391ec1c05fd1c62f%3A0x64156e47bdab0b5b!2sKohar%20Public%20School
      %20(KPS)!5e0!3m2!1sen!2s!4v1662722146640!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
    <div className="row mb-2 mt-5">
      <div className="col-lg-6 col-md-8 text-center text-md-start">
        <p className="fs_18 text-primary">LET'S TALK US</p>
        <h5>Drop A Message</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
        <div className=" d-flex">
          <div>
            <img src={require("../../assests/ContactUs/place.png")} className="Place_imag_size" alt="" />
          </div>
          <div className="pt-1 ms-2">
            <h6>Office</h6>
            <p>Lac 2, Tunis, Tunisie,<br /> USA</p>
          </div>
        </div>    
      </div>
      <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
        <div className=" d-flex">
          <div>
            <img src={require("../../assests/ContactUs/tel.png")} className="imag_size" alt="" />
          </div>
          <div className="pt-1 ms-2">
            <h6>Call Us</h6>
            <p className="mb-0">+33 6 98 59 05 22</p>
            <p>+33 6 99 16 51 37</p>
          </div>
        </div>    
      </div>
      <div className="col-md-4 d-flex justify-content-center justify-content-md-start ">
        <div className=" d-flex">
          <div>
            <img src={require("../../assests/ContactUs/email.png")} className="imag_size" alt="" />
          </div>
          <div className="pt-1 ms-2">
            <h6>Email</h6>
            <p className="mb-0">userone@gail.com</p>
            <p>userone@gail.com</p>
          </div>
        </div>    
      </div>
    </div>
  </div>
</div>

    );
}

export default ContactUs;