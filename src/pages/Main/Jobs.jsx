import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import Paginate from '../../components/FrontEndPaginate';
import Table from '../../components/CustomTable/Table';
import useApi from '../../hooks/useApi';
import './styles/Jobs.css'
const headers=['Faculty Name','Location','Unit','Shift','Speciality','Profession','Action']




function Jobs(props) {

// const {data,loading,request}=useApi(()=>apiClient.get(`/posts`))

const data=[]

// useEffect(()=>{
// getData()

// },[])

// async function getData(){


// const result= await request()

// }


return (

  <div>
  <div className="container">
    <div className="row my-5">
      <div className="col-md-6">
        <h5 className="text-primary text-md-start text-center mb-5 mb-md-0">Job Specialty 1</h5>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-center justify-content-md-end">
          <select className="form-select borde_colr w-50">
            <option>Job Specialty </option>
            <option>Job Specialty 2</option>
            <option>Job Specialty 3</option>
            <option>Job Specialty 4</option>
          </select>
          <button type="button" className="letsgo text-white ms-3 px-3">Let's Go <img src="./arrow_back.png" alt="" className="ms-2" style={{height: '10px'}} /></button>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col ">
        <div className=" table-responsive ">
          <table className=" table table-hover">
            <thead className="bg-primary text-white">
              <tr className id="table-color">
                <th className=" white_space">
                  <p className="mb-0 white_space">Facility Name</p>
                </th>
                <th className=" white_space">
                  <p className="mb-0">Location</p>
                </th>
                <th className=" white_space">
                  <p className="mb-0">Unit</p>
                </th>
                <th className=" white_space">
                  <p className="mb-0">Shift</p>
                </th>
                <th className=" white_space">
                  <p className="mb-0">Specialty</p>
                </th> 
                <th className=" white_space">
                  <p className="mb-0">Profession</p>
                </th>
                <th className=" white_space">
                  <p className="mb-0">Submit</p>
                </th>
              </tr>
            </thead>
            <tbody><tr className=" py-2" id="table-color">
                <td className="white_space">
                  <p>Fletcher Bradford</p>
                </td>
                <td className="white_space">
                  <p>Giacomo Peterson</p>
                </td>
                <td className="white_space">
                  <p>1</p>
                </td>
                <td className="white_space">
                  <p>Day</p>
                </td>
                <td className="white_space">
                  <p>Joseph Larsen</p>
                </td>
                <td className="white_space">
                  <p>Doctor</p>
                </td>
                <td>
                  <Link to="/jobs/apply-now"><button className="white_space btn btn-primary px-4"><small>Apply Now</small></button></Link>
                </td>
              </tr>
              <tr className=" py-2" id="table-color">
                <td className="white_space">
                  <p>Fletcher Bradford</p>
                </td>
                <td className="white_space">
                  <p>Giacomo Peterson</p>
                </td>
                <td className="white_space">
                  <p>1</p>
                </td>
                <td className="white_space">
                  <p>Day</p>
                </td>
                <td className="white_space">
                  <p>Joseph Larsen</p>
                </td>
                <td className="white_space">
                  <p>Doctor</p>
                </td>
                <td>
                    <Link to="/jobs/apply-now"><button className="white_space btn btn-primary px-4"><small>Apply Now</small></button></Link>
                </td>
              </tr>
              <tr className=" py-2" id="table-color">
                <td className="white_space">
                  <p>Fletcher Bradford</p>
                </td>
                <td className="white_space">
                  <p>Giacomo Peterson</p>
                </td>
                <td className="white_space">
                  <p>1</p>
                </td>
                <td className="white_space">
                  <p>Day</p>
                </td>
                <td className="white_space">
                  <p>Joseph Larsen</p>
                </td>
                <td className="white_space">
                  <p>Doctor</p>
                </td>
                <td>
                    <Link to="/jobs/apply-now"><button className="white_space btn btn-primary px-4"><small>Apply Now</small></button></Link>
                </td>
              </tr>
              <tr className=" py-2" id="table-color">
                <td className="white_space">
                  <p>Fletcher Bradford</p>
                </td>
                <td className="white_space">
                  <p>Giacomo Peterson</p>
                </td>
                <td className="white_space">
                  <p>1</p>
                </td>
                <td className="white_space">
                  <p>Day</p>
                </td>
                <td className="white_space">
                  <p>Joseph Larsen</p>
                </td>
                <td className="white_space">
                  <p>Doctor</p>
                </td>
                <td>
                    <Link to="/jobs/apply-now"><button className="white_space btn btn-primary px-4"><small>Apply Now</small></button></Link>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</div>

);
}



const btn=(item)=>{
return (
<>

  <button className="btn btn-primary m-2" style={{backgroundColor:'#32abe2'}}
    onClick={()=>console.log(item)}>Apply</button>
</>
);
}


export default Jobs;