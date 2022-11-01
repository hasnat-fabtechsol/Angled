import React, { useContext } from 'react';
import AuthContext from '../../auth/auth-context';
import IsHospital from '../../hooks/IsHospital';
import './styles/Home2.css'

function Home2(props) {

    const auth = useContext(AuthContext);

    async function handleSubmit(){
        


 
  const result=await IsHospital()
  console.log("result "+result)
    }
    return (
        <div>
         <div className="d-flex justify-content-start align-items-center home-poster">
            
            <div className='text-center ms-2 ms-lg-5 ms-sm-3'>

            <h1 className='text-white'>Browse Jobs By Speciality</h1>
            <button className="btn btn-warning m-2" onClick={handleSubmit}>Apply Now</button>
            <button className="btn btn-light" >Register</button>
            </div>
         </div>

         <div className="flex-center flex-column mb-5">
      <div className="p-4 d-sm-flex justify-content-md-center justify-content-start align-items-center flex-wrap gap-2 mb-0 mb-md-2 w-70"
        style={{margin: 'auto', background: 'rgb(245, 246, 248)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', transform: 'translateY(-3rem)'}}>
        <input className="minWidth15r" type='text' placeholder="Search Keyword" />
        <input className="minWidth15r" type='text' placeholder="Search Specimen" />
        <input className="minWidth15r" type='text' placeholder="Search Location" />
        <button className="btn btn-primary">Find
          Job</button></div>
          </div>
          <div className="container bg-white mt-4 pt-4 ps-5">
          <div className="d-flex flex-column align-items-center mt-4 flex-wrap" style={{minHeight: '120vh'}}>
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
          </div>






        </div>
    );
}

export default Home2;