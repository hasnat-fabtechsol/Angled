import {  Paper, Typography,Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, {  useState } from 'react';
import {AdminButton, TableMui} from '../../components/mui';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { useEffect } from 'react';
import { trimDate, trimDates } from '../../components/trimDate';
import { Link, useNavigate } from 'react-router-dom';
let limit=10
const BlogsDashboard=()=>{
    const [count,setCount]=useState(0)
    const [blogs,setBlogs]=useState()
    const [loading, setLoading] = useState(false);
    
    const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
    const navigate = useNavigate();
    const [offset,setOffset]=useState(0)
    
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
    setLoading(false)
    
    
    }
    
    
    
    const handlePageChange = (event,value) => {
      
      value=((value - 1) * limit)
      fetchData(Endpoint+value)
      setOffset(value)
        
    
    
    }

    const btn=(item)=>{

     
  const blogDetail=(item)=>{
   

    navigate('/admin/blog/detail/'+item.id,{state:item});
      
    }
  const blogEdit=(item)=>{
   

    navigate('/admin/blog/edit/'+item.id,{state:item});
      
    }
    const handleDelete= async (id)=>{
        
     const response= await apiClient.delete(`blog/${id}/`)
     if(response.status!=204)
     return console.log("error while retrieve")
     else{
      fetchData(Endpoint+offset)
       alert('deleted success fully')

     }
     
    }
  
      return (
      <div className='d-flex gap-3 justify-content-center'>
      <AdminButton onClick={()=>blogDetail(item)}
                              name="Detail"
                             
                            
                            />
      <AdminButton onClick={()=>blogEdit(item)}
                              name="Edit"
                              style={{  backgroundColor: "#b09150",
                              "&:hover": { backgroundColor: "#c9a55a" }}}
                            />
     
      <AdminButton className="btn btn-danger" style={{backgroundColor:'red',"&:hover": { backgroundColor: "#e32636" }}} onClick={()=>handleDelete(item.id)}
                              name="Delete"
                            
                            
                            />
      </div>
      );
      }
    
      return (
    
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
         <AdminButton onClick={()=>navigate('/admin/blog/add-new/')}
                              name="Add New"
                            
                            />
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
      Blogs
        </Typography>
    
          <Box>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              loading={loading}
              th={{
                title: "Title",
                    description: "Description",
                    created_at: "Date",
              }}
              td={blogs}
              customBtn={(row)=>btn(row)}
            />
           
          </Box>
          <Paginate count={count} limit={limit} onChange={handlePageChange}/>
          </Box>
       
      )
    }
    export default BlogsDashboard

   