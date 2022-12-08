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
  <section className="container">
    <div className="mt-5 mb-3 rounded position-relative d-flex justify-content-start align-items-center jobs-poster">
      <div className="text-center ms-lg-5 ms-sm-3 ms-2">
        <h1 className="font50px text-white mb-4">BROWSE JOBS BY <br /> SPECIALITY</h1>
     <Link  style={{textDecoration:'none'}}  to='#'><button className="web-btn bg-orangeJuice clr-white me-4">Apply Now</button></Link>
              <Link style={{textDecoration:'none'}} to='/signup'> <button className="web-btn clr-white bg-transparent border-wt">Register</button></Link> 
      </div>
    </div>
    <div className="flex-center flex-column mb-5">
      <div className="p-4 d-flex justify-content-center align-items-center flex-wrap gap-2 w-70"
        style={{margin: 'auto', background: 'rgb(245, 246, 248)', borderRadius: '1rem', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px', transform: 'translateY(-3rem)'}}>
        <input className="minWidth15r" type='text' placeholder="Search Keyword" />
        <input className="minWidth15r" type='text' placeholder="Search Specimen" />
        <input className="minWidth15r" type="text" placeholder="All Location" />
        <button className="btn btn-primary">Find
          Job</button></div>
     
      <div className="table overflow-auto">


        <Paginate data={data} postsPerPage={3}>
          <Table headers={headers} hideId={true} btn={btn} />
        </Paginate>

      </div>
    </div>
  </section>
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