import { Toolbar } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../../api/apiClient'
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay'
import { trimDates } from '../../components/trimDate'
import useApi from '../../hooks/useApi'
import './styles/blogs.css'
let limit=10
export default function Blogs() {

  const [count,setCount]=useState(0)
  const [blogs,setBlogs]=useState([])
  
  const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
  const [offset,setOffset]=useState(0)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let Endpoint = `blogs/?limit=${limit}&offset=`;
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
  const afterTrimming = trimDates(response.data.results, "created_at");
 
  afterTrimming && setBlogs(afterTrimming);
  console.log(afterTrimming);
  setLoading(false)
  
  }

  const blogDetail=(item)=>{
   

  navigate('/blog/detail/'+item.id,{state:item});
    
  }
  return (
    <div className='py-5'>
    <div className="container-fluid">
      <div className="row back_img my-3 mx-0 mx-sm-4">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 pt-3 ps-sm-5 my-auto">
          <h1 className="Hfs_16">Our Blogs</h1>
          <button type="button" className="px-4 py-2 mt-3 Contact_btn">Sign in to Apply</button>
          <img  src={require("../../assests/Blogs/play-circle.png")} alt="" className="play_img ms-3" />
        </div>
      </div>
    </div>
    <div className="container">
     <div className="row">
    <LoadingOverlaySmall  open={loading}/>
     {
       !loading&&blogs.map(item=>(
 <div className="col-lg-4 col-md-6 mb-4"  onClick={()=>blogDetail(item)}>
 <div className="card">
   <img className="card-img-top" src={item.image} alt="Card image" style={{width: '100%', height: '16rem'}} />
   <div className="card-body">
     <div className="d-flex mb-2">
      <h5 className="card-title">{item.title}</h5>
      <div className='ms-1 d-flex justify-content-between w-100' style={{fontSize: '13px'}}>
        <div className="my-auto mx-2">
          <div className='text_hidden'><h6 className="mb-0">{item.author}</h6></div>
        </div>
        <div className="my-auto ms-2">
          <p className="mb-0">{item.created_at}</p>
        </div>
      </div>
     </div>
     <div id="section">
       <div className="article">
         <p className="mb-0 fs_12">{item.description}</p>
       </div>
       <button type="button" className="btn btn-link moreless-button" onClick={()=>blogDetail(item)}>Read more</button>
     </div>
   </div>
 </div>
        
       
        </div>
        ))}

      </div>
    </div>
  </div>
  
  )
}
