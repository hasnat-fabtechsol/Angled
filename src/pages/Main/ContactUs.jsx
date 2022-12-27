import { Toolbar } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay';
import './styles/Contact_Us.css'
import * as yup from 'yup';
import { isValidEmail } from '../../services/validator';
import Joi from "joi-browser";
import { func } from 'joi';

const validateCOntactUs = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  const val = schema.validate(user);
  if (val.error) return val.error.message;
};

function ContactUs(props) {
const emptyFields={
first_name:'',
last_name:'',
title:'',
email:'',
comment:'',
}
  const [contactUs,setContactUs]=useState(emptyFields)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({text:"",color:""});
  function handleChange(name,value){
setContactUs({...contactUs,[name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    resetErrors()
  if(validateCOntactUs({email:contactUs.email}))
  return setMessage({text:"Not A Valid Email Please Enter a Valid Email",color:"danger"})
    setLoading(true)
    const response= await apiClient.post('/contact_us/',contactUs)
    setLoading(false)
    if(response.status!=201)
    return console.log("error")
    setMessage({text:"Successfully Added",color:"success"})
  }

  function resetErrors(){
    setMessage({text:"",color:""})
  }
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
            <div className="row table table-responsive">
              <table className='table-borderless'>
                <tr className='bottom_border_none'>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_1.png")} className="OurPartner_style" alt="" />
                  </td>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_2.png")} className="OurPartner_style" alt="" />
                  </td>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_3.png")} className="OurPartner_style" alt="" />
                  </td>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_4.png")} className="OurPartner_style" alt="" />
                  </td>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_5.png")} className="OurPartner_style" alt="" />
                  </td>
                  <td>
                  <img src={require("../../assests/ContactUs/OurPartner_6.png")} className="OurPartner_style" alt="" />
                  </td>
                </tr>
              </table>
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
        <form  onSubmit={handleSubmit}>
        <div className="row">
            <div className="col mb-4">
              <input type="text" className="form-control" placeholder="Enter Title" name="title"  
              onChange={(e)=>handleChange('title',e.target.value)} onFocus={resetErrors} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mb-4">
              <input type="text" className="form-control" placeholder="Enter First Namel" name="firstname" 
              onChange={(e)=>handleChange('first_name',e.target.value)} onFocus={resetErrors}/>
            </div>
            <div className="col-sm-6 mb-4">
              <input type="text" className="form-control" placeholder="Enter Lastname" name="lastname" 
               onChange={(e)=>handleChange('last_name',e.target.value)} onFocus={resetErrors}/>
            </div>
          </div>
          <div className="row">
            <div className="col mb-4">
              <input type="text" className="form-control" placeholder="Enter email" name="email" 
               onChange={(e)=>handleChange('email',e.target.value)} onFocus={resetErrors}/>
            </div>
          </div>
       
          <div className="row">
            <div className="col mb-4">
              <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} 
               onChange={(e)=>handleChange('comment',e.target.value)} onFocus={resetErrors}/>
            </div>
          </div>
         {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>}
        {!loading? <button type="submit" className="btn btn-primary px-3 mb-4">Send Message</button>:
         <LoadingOverlaySmall open={loading}/>}
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