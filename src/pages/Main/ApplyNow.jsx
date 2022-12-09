import React from 'react'
import './styles/job_apply_now.css'

export default function ApplyNow() {
  return (
    <div>
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
      <form className=" col-lg-9 px-sm-0 px-5">
        <div className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-3" placeholder="Candidate Name" name="CandidateName" />
          </div>
          <div className="col-sm-6">
            <input type="number" className="form-control mb-3" placeholder="Cell Number" name="Num" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-3" placeholder="Email Address" name="EmailAddress" />
          </div>
          <div className="col-sm-6">
            <input type="number" className="form-control mb-3" placeholder="Bill Rate" name="BillRate" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="number" className="form-control mb-3" placeholder="Social Security Number" name="SocialSecurity" />
          </div>
          <div className="col-sm-6">
            <input type="text" className="form-control mb-3" placeholder="Driver License or State ID" name="DriverLicense" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-3" placeholder="Professional License Verification" name="ProfessionalLicense" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <input type="text" className="form-control mb-3" placeholder="Compliance Per Agency" name="PerAgency" />
          </div>
          <div className="col-sm-6">
            <input type="password" className="form-control" placeholder="Submittal Per Agency" name="Submittal" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send message</button>
      </form>
    </div>
  </div>
</div>

  )
}
