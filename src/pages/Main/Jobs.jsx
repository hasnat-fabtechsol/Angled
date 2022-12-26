import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import './styles/Jobs.css'
const headers=['Faculty Name','Location','Unit','Shift','Speciality','Profession','Action']
const fields=['position','location','unit','shift','speciality','profession']


let limit=10

function Jobs(props) {


const [count,setCount]=useState(0)


const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

let Endpoint = `posts/?limit=${limit}&offset=`;
useEffect(()=>{
  fetchData(Endpoint+offset)
  console.log("called")
},[])
const fetchData = async (endpoint) => {

 const response= await request(endpoint)
          
if(error)
return console.log("error while retrieve")
if(!count)
setCount(response.data.count)


}



const handlePageChange = (event,value) => {
  
  value=((value - 1) * limit)
  fetchData(Endpoint+value)
  setOffset(value)
    


}


return (

  <div>
  <div className="container py-5">
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
                {headers.map(item=>(
                <th className=" white_space">
                  <p className="mb-0 white_space">{item}</p>
                </th>
                ))}
                
              </tr>
            </thead>
            <tbody>
              {data.map(item=>(

<tr className=" py-2" id="table-color">
  {fields.map(field=>(
    <td className="white_space">
  <p>{item[field]}</p>
</td>
  ))}


<td>
  <Link to={"/jobs/apply-now/"+item.id}><button className="white_space btn btn-primary px-4"><small>Apply Now</small></button></Link>
</td>
</tr>
              ))}
        
           
            </tbody></table>

            <Paginate count={count} limit={limit} onChange={handlePageChange}/>
        </div>
      </div>
    </div>
  </div>
</div>

);
}




export default Jobs;