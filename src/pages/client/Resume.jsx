import React, { useEffect } from 'react';

import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {  useState } from 'react';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { baseURL } from '../../api/apiClient';
import { trimDateTimeArray } from '../../components/trimDate';
import { LoadingOverlaySmall } from '../../components/mui/LoadingOverlay';
let limit=10
export default function(){
  const [count,setCount]=useState(0)
  

  const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)
const [loading, setLoading] = useState(false);
const [resumes, setResumes] = useState(null);
  let offsetEndpoint = `&limit=${limit}&offset=`;
  let newJobEndpoint = `resume/?`;
  useEffect(()=>{
    fetchNewJobs(newJobEndpoint+offsetEndpoint+offset)
    
  },[])
  const fetchNewJobs = async (endpoint) => {
    setLoading(true)
   const response= await request(endpoint)
            
   if(error)
   return console.log("error while retrieve")
if(!count)
setCount(response.data.count)
const afterTrimming = trimDateTimeArray(response.data.results, "created_at");
afterTrimming && setResumes(afterTrimming);
setLoading(false)
 
  }

 

  const handlePageChange = (event,value) => {
    
   value=((value - 1) * limit)
    fetchNewJobs(newJobEndpoint+offsetEndpoint+value)
    setOffset(value)
      
  
  };

  return (
    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
Resumes
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
                                  {!loading&&  <TableBody>
                                        {resumes?.map((data, index) => {
                                            return (
                                                <TableRow
                                                key={index}
                                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                       {data.created_at}
                                                    </TableCell>
                                                    <TableCell align="center">{data.job_post?.position}</TableCell>
                                                    <TableCell align="center">{data.job_post?.location}</TableCell>
                                                    <TableCell align="center">{data?.job_post?.shift}</TableCell>
                                                    <TableCell align="center">
                                                      
                                                    <a
                                                        href={`${baseURL}${data.resume_url}`}
                                                        download={`resume-${data.resume?.id}.pdf`} 
                                                        target='_blank'
                                                        className='btn text-white me-3'
                                                        style={{  backgroundColor: "#b09150",
                                                        "&:hover": { backgroundColor: "#c9a55a" }}}
                                                        >
                                                        Download
                                                    </a>
                                                    <a
                                                        href={`${baseURL}${data.resume_url}`}
                                                        target="_blank"
                                                        className='btn text-white'
                                                        style={{  backgroundColor: "#b09150",
                                                        "&:hover": { backgroundColor: "#c9a55a" }}}
                                                        >
                                                       View
                                                    </a>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>}
                                </Table>
                            </TableContainer>
                           {loading&& <LoadingOverlaySmall open={loading}/>}
   
    </Box>
    <Paginate  count={count} limit={limit} onChange={handlePageChange}/>
</Box>
  )
}






