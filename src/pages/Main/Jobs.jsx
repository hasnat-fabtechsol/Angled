import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import './styles/Jobs.css'
const headers=['Faculty Name','Location','Unit','Shift','Speciality','Profession','Action']
const fields=['position','location','unit','shift','speciality','profession']


let limit=10

function Jobs(props) {
  const location = useLocation();

const [count,setCount]=useState(0)

const [loading, setLoading] = useState(false);
const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
const [speciality,setSpeciality]=useState(location.state?location.state:"")
const [offset,setOffset]=useState(0)

let Endpoint = `posts/?speciality=${speciality}&limit=${limit}&offset=`;
useEffect(()=>{
  fetchData(Endpoint+offset)
},[])
const fetchData = async (endpoint) => {
setLoading(true)
 const response= await request(endpoint)
          
if(error)
return console.log("error while retrieve")
if(!count)
setCount(response.data.count)
setLoading(false)

}



const handlePageChange = (event,value) => {
  
  value=((value - 1) * limit)
  fetchData(Endpoint+value)
  setOffset(value)
    


}


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
  <div className="container py-5">
    <div className="row my-5">
      <div className="col-md-6">
        <h5 className="text-primary text-md-start text-center mb-5 mb-md-0">Job Specialty</h5>
      </div>
      <div className="col-md-6">
        <div className="d-flex justify-content-center justify-content-md-end">
        <Grid item xs={12}>
                  <TextField
                  
                    required
                    fullWidth
                    id="speciality"
                    label="Speciality"
                    name="speciality"
                    autoComplete="speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  />
                </Grid>
          <button type="button" className="letsgo text-white ms-3 px-3" onClick={()=>{setOffset(0);fetchData(Endpoint)}}>Let's Go <img src="./arrow_back.png" alt="" className="ms-2" style={{height: '10px'}} /></button>
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
           {!loading&& <tbody>
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
        
           
            </tbody>}
            
            </table>
{loading&&<LoadingOverlaySmall open={loading}/>}
            <Paginate count={count} limit={limit} onChange={handlePageChange}/>
        </div>
      </div>
    </div>
  </div>
</div>

);
}




export default Jobs;