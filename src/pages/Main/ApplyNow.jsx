import { Toolbar } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import './styles/job_apply_now.css'

export default function ApplyNow() {

  const { id } = useParams();
  let emptyFields = {
    job_post: id,
    candidate_name: "",
    phone: "",
    email: "",
    social_security_number: "",
    driver_license: "",
    professional_license_verification: "",
    bill_rate: "",
    compliance_per_agency: "",
    submitals_per_agency: "",
  };
  const [addNew, setAddNew] = useState(emptyFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddNew({ ...addNew, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const response = await apiClient.post("/applications/", addNew);
    if (response.status === 201) {
      setAddNew(emptyFields);
    }
  };

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
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 px-sm-0 px-5 mb-3">
        <h5>Candidate Information</h5>
      </div>
      <form className=" col-lg-9 px-sm-0 px-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="" className='mb-1'>candidate name</label>
            <input type="text" 
             name="candidate_name"
             value={addNew.candidate_name}
             onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Cell Number</label>
            <input type="number" 
            name="phone"
            value={addNew.phone}
            onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Email Address</label>
            <input type="text"
            name="email"
            value={addNew.email}
            onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Bill Rate</label>
            <input type="number" 
            name="bill_rate"
            value={addNew.bill_rate}
            onChange={handleChange}
            className="form-control mb-3" placeholder="" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Social Security Number</label>
            <input type="number"
            name="social_security_number"
            value={addNew.social_security_number}
            onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Driver License or State ID</label>
            <input type="text"
            name="driver_license"
            value={addNew.driver_license}
            onChange={handleChange}
            className="form-control mb-3" maxlength="8" placeholder=""  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Professional License Verification</label>
            <input type="text"
            name="professional_license_verification"
            value={addNew.professional_license_verification}
            onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Compliance Per Agency</label>
            <input type="text"
            name="compliance_per_agency"
            value={addNew.compliance_per_agency}
            onChange={handleChange}
            className="form-control mb-3" placeholder=""  />
          </div>
          <div className="col-sm-6">
          <label htmlFor="" className='mb-1'>Submittal Per Agency</label>
            <input type="text" 
            name="submitals_per_agency"
            value={addNew.submitals_per_agency}
            onChange={handleChange}
             className="form-control" placeholder=""  />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-5 mt-sm-0 mt-3">Send message</button>
      </form>
    </div>
  </div>
</div>

  )
}
