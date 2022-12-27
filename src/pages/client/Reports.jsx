import React from 'react';

import { Pagination, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {  useState } from 'react';
import { TableMui, SelectOption } from "../../components/mui";
import Paginate from '../../components/Paginate';
import { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
let limit=10
export default function(){


  const [count,setCount]=useState(0)
  
  
  const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
  const [offset,setOffset]=useState(0)
  const [loading, setLoading] = useState(false);
  let Endpoint = `employments/?limit=${limit}&offset=`;
  useEffect(()=>{
    fetchData(Endpoint+offset)
  },[])
  const fetchData = async (endpoint) => {
    setLoading(true)
   const response= await request(endpoint)
            
   if(error)
   return console.log("error while retrieve")
   console.log(response.data)
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
  
      
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
  Reports
      </Typography>
  
       <Box>
         <TableMui
           styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
           loading={loading}
           th={{
            candidate: "Candidate Name",
            starting_date: "Starting Date",
            submitals_per_agency: "Submittal",
            compliance_per_agency: "Compliance",
           }}
           td={data}
           link={"/client/active-job/"}
           btnName="Detail"
           btnSize="small"
           btnStyle={{
             backgroundColor: "#b09150",
             "&:hover": { backgroundColor: "#c9a55a" },
           }}
         />
        
       </Box>
       <Paginate count={count} limit={limit} onChange={handlePageChange}/>
   
    </Box>
    )
  }



