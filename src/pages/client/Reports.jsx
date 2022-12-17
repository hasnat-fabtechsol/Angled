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
  
  
  const {data,request}=useApi((endpoint)=>apiClient.get(endpoint))
  const [offset,setOffset]=useState(0)
  
  let Endpoint = `employments/?limit=${limit}&offset=`;
  useEffect(()=>{
    fetchData(Endpoint+offset)
  },[])
  const fetchData = async (endpoint) => {
  
   const response= await request(endpoint)
            
  if(response.status!=200){
  
    
   return console.log("error while retrieve"+response.data)
   }
   console.log(response.data)
  if(!count)
  setCount(data.count)
  
  
  }
  
  
  
  const handlePageChange = (event,value) => {
    
    value=((value - 1) * limit)
    fetchData(Endpoint+value)
    setOffset(value)
      
  
  
  }
  
  
    return (
  
      
      <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
    Active Submissle
      </Typography>
  
       <Box>
         <TableMui
           styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
           th={{
            candidate: "Candidate Name",
            starting_date: "Starting Date",
            submitals_per_agency: "Submittal",
            compliance_per_agency: "Compliance",
           }}
           td={data.results}
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



