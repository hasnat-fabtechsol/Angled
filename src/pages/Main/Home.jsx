import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'
function Home(props) {
return (
<div>       
    <div class="position-relative d-flex justify-content-start align-items-center home-poster">
        <div class="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 class="font50px text-white mb-4">BROWSE JOBS BY <br />SPECIALITY </h1>
            <Link to="/jobs"> <button class="web-btn bg-wood clr-white mx-3">Apply Now</button></Link>
            <Link style={{textDecoration:'none'}} to="/signup"> <button
                class="web-btn clr-white bg-transparent border-wt" style={{background:'#A98C4D'}}>Register</button>
            </Link>


        </div>
    </div>
    <div className="flex-center flex-column mb-5">
      <div className="p-4 d-flex justify-content-center align-items-center flex-wrap gap-2 w-70"
        style={{margin: 'auto', background: 'rgb(245, 246, 248)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', transform: 'translateY(-3rem)'}}>
        <input className="minWidth15r" type='text' placeholder="Search Keyword" />
        <input className="minWidth15r" type='text' placeholder="Search Specimen" />
        <button className="btn btn-primary">Find
          Job</button></div>
          </div>
    <div className="container bg-white mt-4 pt-4 ps-5">
        <div className="d-flex flex-column align-items-center mt-4" style={{minHeight: '120vh'}}>
            <div className="text-center"
                style={{width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))', gap: '1rem', justifyContent: 'center'}}>
                <div className=" rounded shadow ps-4 pe-2 py-5">
                    <p className="mb-5">Vision Service</p><img src={require('../../assests/Home/cards/card1.png')} alt="vision service"
                        style={{width: '89%'}} />
                </div>
                <div className=" rounded shadow ps-4 pe-2 py-5">
                    <p className="mb-5">Rehabilitation Therapy</p><img src={require('../../assests/Home/cards/card2.png')}
                        alt="vision service" style={{width: '79%'}} />
                </div>
                <div className=" rounded shadow ps-4 pe-2 py-5">
                    <p className="mb-5">Rehabilitation Therapy</p><img src={require('../../assests/Home/cards/card3.png')} alt="vision service"
                        style={{width: '69%'}} />
                </div>
                <div className=" rounded shadow ps-4 pe-2 py-5">
                    <p className="mb-5">Pharmacy</p><img src={require('../../assests/Home/cards/card4.png')} alt="vision service"
                        style={{width: '79%'}} />
                </div>
            </div><u className="my-5 pointer">View more</u>
        </div>
        <div className="flex-center position-relative gap-3 mb-3 rounded form-poster"
            >
            <div className=" flex-center flex-wrap gap-4">
                <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2"><img
                        src={require('../../assests/Home/icons/icon7.png')} alt="instantForms" style={{width: '3rem'}} />
                    <h6 className="mt-3">Instant Online Forms</h6>
                </div>
                <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2"><img
                       src={require('../../assests/Home/icons/icon8.png')} alt="downloadForm" style={{width: '2.5rem'}} />
                    <h6 className="mt-3">Download Pdf Forms</h6>
                </div>
            </div>
            <div className="position-absolute" style={{top: '100%', left: '50%', transform: 'translate(-50%, -100%)'}}>
                <img src={require('../../assests/Home/HomeBottom.png')} alt="home2Bottom" /></div>
        </div>
        <div className="text-center mb-5">
            <h2 className="f700 mb-5" style={{lineHeight: '3rem'}}>We'll always match you up with opportunities <br />
                that are the right fit</h2>
            <div className="m-auto"
                style={{width: '75%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))', gap: '2rem'}}>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon1.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">Policies &amp; Procedures</h5>
                    <p className="font14px">This manual is intended to provide employees with a general understanding of
                        our personnel policies and procedures.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon2.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">COMPETENCIES</h5>
                    <p className="font14px">Asses your workforce through our online clinical competencies exams.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon3.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">FORMS</h5>
                    <p className="font14px">Whenever you struggle with anything regarding Rife Pro, just hit us a
                        message on our support forum.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon4.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">APPLY ONLINE</h5>
                    <p className="font14px">Ready to Apply? You’re in the right spot.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon5.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">SKILLS CHECKLIST</h5>
                    <p className="font14px">Please provide us with your skills, knowledge, and abilities.</p>
                </div>
                <div className="bg-white rounded shadow p-3"><img  src={require('../../assests/Home/icons/icon6.png')} alt="opportunity1"
                        style={{width: '5rem'}} />
                    <h5 className="my-4">STAFFING NEEDS</h5>
                    <p className="font14px">Tell us your staffing needs.</p>
                </div>
            </div>
        </div>
        <div className="mb-3">
            <div className="row">
                <div className="col-sm-5 col-12 mb-3"><img src={require('../../assests/Home/mission-pic.png')} alt="missionStatement"
                        style={{width: '100%'}} /></div>
                <div className="col-sm-7 col-12">
                    <h2 className="f700">Mission Statement</h2>
                    <p className>Our mission at HHI is to help companies meet their staffing needs. We will provide
                        superior health care. HHI will work with organizations of all sizes, providing them with
                        productive and efficient temporary personnel. HHI markets personnel to business, industry,
                        government and healthcare facilities as well as to individuals at home. HHI complies with The
                        Joint Commission Accreditation of Health Care Organizations standards. Ensuring consistent
                        operating policies and procedures is critical to the clients we serve. Below is a summary of the
                        type of healthcare personnel we hire: Clinical: Registered Nurses, Licensed Practical Nurses,
                        Certified Home Health Aides, Physical Therapist, Nursing Assistants, Respiratory Therapists and
                        a variety of Allied Health Professionals. Keeping both employee and client happy is our goal. We
                        must be aware of the needs of our clients so that they are fully satisfied with every assignment
                        for which we are responsible. Our growth will be evidence that we do this well. We will retained
                        clients who have the skills and the experience from the very inception of our business.</p>
                </div>
            </div>
        </div>
        <div className="text-center clr-purple p-4"><img src={require('../../assests/Home/cpr.png')} alt="crpExpert"
                style={{width: '17rem'}} />
            <p>AN AMERICAN HEART ASSOCIATION TRAINING WEB SITE.</p>
            <p>ONLINE COURSES OFFERED:</p>
            <p>ACLS, BLS, FIRST AID, NRP, PALS, PEDIATRIC FIRST AID AND CEUS</p><img src={require('../../assests/Home/lacy.png')}
                alt="lacyFinancial" style={{width: '17rem'}} />
            <p>AN INVESTMENT ADVISORY FIRM</p>
            <p>OFFER CONSULTING SERVICES HELPING YOU EVERY STEP OF THE WAY TO SUCCESS: PLAN, BUDGET., INVEST AND MANAGE.
            </p>
            <p>TRY US OUT!</p>
        </div>
    </div>
</div>
);
}

export default Home;