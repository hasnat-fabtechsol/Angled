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
      <Toolbar/>
      <Toolbar/>
  <div className="container-fluid">
    <div className="row back_img my-3 mx-0 mx-sm-4">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto">
        <h1 className="Hfs_16">BROWSE JOBS BY <br />SPECIALITY</h1>
        <p className="Pfs_12">In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
          used to demonstrate the visual form of a document</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12 px-sm-0 px-5 mb-3">
        <h5>Candidate Information</h5>
      </div>
      <form className=" col-lg-9 px-sm-0 px-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <input type="text" 
             name="candidate_name"
             value={addNew.candidate_name}
             onChange={handleChange}
            className="form-control mb-3" placeholder="Candidate Name"  />
          </div>
          <div className="col-sm-6">
            <input type="number" 
            name="phone"
            value={addNew.phone}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Cell Number"  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text"
            name="email"
            value={addNew.email}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Email Address"  />
          </div>
          <div className="col-sm-6">
            <input type="number" 
            name="bill_rate"
            value={addNew.bill_rate}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Bill Rate" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="number"
            name="social_security_number"
            value={addNew.social_security_number}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Social Security Number"  />
          </div>
          <div className="col-sm-6">
            <input type="text"
            name="driver_license"
            value={addNew.driver_license}
            onChange={handleChange}
            className="form-control mb-3" maxlength="8" placeholder="Driver License or State ID"  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text"
            name="professional_license_verification"
            value={addNew.professional_license_verification}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Professional License Verification"  />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text"
            name="compliance_per_agency"
            value={addNew.compliance_per_agency}
            onChange={handleChange}
            className="form-control mb-3" placeholder="Compliance Per Agency"  />
          </div>
          <div className="col-sm-6">
            <input type="text" 
            name="submitals_per_agency"
            value={addNew.submitals_per_agency}
            onChange={handleChange}
             className="form-control" placeholder="Submittal Per Agency"  />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send message</button>
      </form>
    </div>
  </div>
</div>

  )
}
