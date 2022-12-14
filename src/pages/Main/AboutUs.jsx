import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/About_us.css'
function AboutUs(props) { 
    const [text,setText]=useState(false)
   const navigate=useNavigate()
return (
    <div>
      <div className='container-fluid' style={{paddingTop : '4rem'}}>
        <div className='container'>
          <div className='row'>
            <div id="demo" class="carousel slide gx-0" data-bs-ride="carousel">
              <div class="carousel-inner" style={{borderRadius:'10px'}}>
                <div class="carousel-item carosal_img active">
                  <img src={require("../../assests/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img rounded-3">
                  <img src={require("../../assests/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item carosal_img">
                  <img src={require("../../assests/Home/background.png")} class="d-block img-fluid"/>
                  <div class="carousel-caption">
                    <div className='mb-5 h3_fs'>
                    <h3>The largest and most powerful PRN platform in the industry.  </h3>
                    <p>You have joined one of the area's newest innovative company.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-left"></i></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className='d-sm-block d-none'><i class="bi bi-chevron-right"></i></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="container-fluid" style={{paddingTop : '5rem'}}>
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
    <div className="container-fluid bg_sky py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-12">
            <div className="d-flex align-items-baseline ">
              <img src="./hand_image.png" alt="" /> 
              <h2>Our</h2>
            </div>
            <h2>Mission Statement </h2>
            <div id="section">
              <div className="article">
                <p>
                  Our mission at HHI is to help companies meet their staffing needs. We will provide 
                  superior health care. HHI will work with organizations of all sizes, providing them 
                  with productive and efficient temporary personnel. HHI markets personnel to business, 
                  industry, government and healthcare facilities as well as to individuals at home. HHI 
                  complies with The Joint Commission Accreditation of Health Care Organizations 
                  standards. Ensuring consistent operating policies and procedures is critical to the 
                  clients we serve. Below is a summary of the type of healthcare personnel we hire:  
                </p>
                <p className="moretext" style={!text?{display: 'none'}:{display: 'block'}}>
                  Clinical: Registered Nurses, Licensed Practical Nurses, Certified Home Health Aides, 
                  Physical Therapist, Nursing Assistants, Respiratory Therapists and a variety of Allied 
                  Health Professionals. Keeping both employee and client happy is our goal. We must be 
                  aware of the needs of our clients so that they are fully satisfied with every 
                  assignment for which we are responsible. Our growth will be evidence that we do this well. We will retained clients who have the skills and the experience from the very inception of our business.
                </p>
              </div>
              <button type="button" onClick={()=>setText(!text)} className="btn btn-link moreless-button">{!text?"Read More":"Read Less"}</button>
              {/* <a class="moreless-button" href="#">Read more</a> */}
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-6 text-end">
            <img src={require("../../assests/AboutUs/our_mission_image.png")} className="img-fluid img_width  pt-md-5 pt-0" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="row mb-5 pb-5">
        <div className="col-md-9 text-center text-md-start WHY_JOIN_ANGLED">
          <h2>WHY JOIN ANGLED INC</h2>
          <p>To be trusted as the most devoted place to provide quality healthcare and financial solutions.</p>
        </div>
        <div className="col-md-3 text-center text-md-start my-auto pb-5"><button 
        onClick={()=>navigate('/jobs')}
        className="px-5 py-2 btn btn-outline-primary">Join</button></div>
      </div>
    </div>
    <div className="container-fluid bg_sky div_posetion">
      <div className="container">
        <div className="row justify-content-center gap-5">
          <div className="col-sm-6 col-md-3 img_posetion">
            <img  src={require("../../assests/AboutUs/about_img_1.png")} className="img-fluid" alt="" />
            <div className="text_on_img">
              <p className="inside_position w-100 text-white">We will provide superior health care.</p>
              <h4 className="position_h4 w-100">FLEXIBILITY</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 img_posetion">
            <img src={require("../../assests/AboutUs/about_img_2.png")} className="img-fluid" alt="" />
            <div className="text_on_img">
              <p className="inside_position w-100 text-white">HHI markets personnel to business, industry, government and healthcare facilities</p>
              <h4 className="position_h4 w-100">EARN MORE</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 img_posetion">
            <img src={require("../../assests/AboutUs/about_img_2.png")} className="img-fluid" alt="" />
            <div className="text_on_img">
              <p className="inside_position w-100 text-white">Ensuring consistent operating policies and procedures is critical to the clients we serve.</p>
              <h4 className="position_h4 w-100">SIMPLICITY</h4>
            </div>
          </div>
          <div className="text-center btn_posetion"><button type="button"
          onClick={()=>navigate('/jobs')}
          className="btn btn-primary px-5">Join Now</button></div>
        </div>
      </div>
    </div>
    <div className="container-fluid my-5 bg_sky">
      <div className="container">
        <div className="row text-center py-5">
          <div className="col-12">
            <p>Got more questions? Find answers to frequently asked questions on our FAQs</p>
          </div>
          <div className="col-12 pt-3">
            <button type="button" className="btn btn-primary px-5" onClick={()=>navigate('/contact-us')}>Contact</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
);
}

export default AboutUs;