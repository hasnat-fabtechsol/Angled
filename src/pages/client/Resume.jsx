import React, { useEffect } from 'react';

import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {  useState } from 'react';
import { TableMui, SelectOption, AdminButton } from "../../components/mui";
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { baseURL } from '../../api/apiClient';
let limit=10
export default function(){
  const [jobs,setJobs]=useState()
  const [count,setCount]=useState(0)
  

  const apiJobs=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

  let offsetEndpoint = `&limit=${limit}&offset=`;
  let newJobEndpoint = `resume/?`;
  useEffect(()=>{
    fetchNewJobs(newJobEndpoint+offsetEndpoint+offset)
    
  },[])
  const fetchNewJobs = async (endpoint) => {

   const response= await apiJobs.request(endpoint)
            
if(response.status!=200){
 
    
   return console.log("error while retrieve"+response.data)
   }
   console.log(response.data)
if(!count)
setCount(response.data.count)
setJobs(response.data.results)

 
  }

 

  const handlePageChange = (event,value) => {
    
   value=((value - 1) * limit)
    fetchNewJobs(newJobEndpoint+offsetEndpoint+value)
    setOffset(value)
      
  
  };

  return (
    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
   New Jobs
    </Typography>

   
      <Box>

      <TableContainer component={Paper}>
                                <Table>
                                    <TableHead sx={{ fontWeight: "bold", whiteSpace: "nowrap" }} >
                                        <TableRow>
                                            <TableCell>Date / Time</TableCell>
                                            <TableCell align="center">Position</TableCell>
                                            <TableCell align="center">Location</TableCell>
                                            <TableCell align="center">Shift</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {jobs?.map((data, index) => {
                                            let splitted = data.created_at?.split("T");
                                            return (
                                                <TableRow
                                                key={index}
                                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        <span>{splitted[0]}</span>
                                                        <span>{splitted[1].split(".")[0]}</span>
                                                    </TableCell>
                                                    <TableCell align="center">{data.job_post?.position}</TableCell>
                                                    <TableCell align="center">{data.job_post?.location}</TableCell>
                                                    <TableCell align="center">{data?.job_post?.shift}</TableCell>
                                                    <TableCell align="center">
                                                      
                                                    <a
                                                        href={`${baseURL}${data.resume_url}`}
                                                        download={`resume-${data.resume?.id}.pdf`} 
                                                        target='_blank'
                                                        className='btn btn-primary me-3'
                                                        >
                                                        Download
                                                    </a>
                                                    <a
                                                        href={`${baseURL}${data.resume_url}`}
                                                        target="_blank"
                                                        className='btn btn-primary'
                                                        >
                                                       View
                                                    </a>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
   
    </Box>
    <Paginate  count={count} limit={limit} onChange={handlePageChange}/>
</Box>
  )
}






