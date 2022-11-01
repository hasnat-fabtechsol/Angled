import { Pagination, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { Children, useEffect, useState } from 'react';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {TableMui, SelectOption } from "../../components/mui";
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';

let limit=10

export default function Dashboard(props) {
    
  


    return (
        <div>
          

          

       
<NewJobs   />

       

        

  
<ActiveSubmissle />
<CurrentlyWorking />




       
     
      

  
           </div>
    );
}



const NewJobs=()=>{
  const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
  const [position,setPosition]=useState()
  const [positions,setPositions]=useState([])
  const [jobs,setJobs]=useState()
  const [count,setCount]=useState(0)
  

  const apiJobs=useApi((endpoint)=>apiClient.get(endpoint))
  const apiPositions=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

  let offsetEndpoint = `&limit=${limit}&offset=`;
  let newJobEndpoint = `posts/?`;
  let positionFilterEndpoint = "jobs/?new=true&position_type=";
  useEffect(()=>{
    fetchNewJobs(newJobEndpoint+offsetEndpoint+offset)
    fetchPositions()
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
  const fetchPositions = async () => {

    const response= await apiPositions.request('position_types/')
             
    if(response.status!=200){
  
     
    return console.log("error while  retrieve"+response.data)
    }
    setPositions(response.data.results)
 
  
   }
   const handleChange = (e) => {
    const { name, value } = e.target;
    setPosition(value);
  
      fetchNewJobs(positionFilterEndpoint+value+offsetEndpoint+offset)
      setClearFilterNewJob(true);
  
  };

  const handlePageChange = (event,value) => {
    
   value=((value - 1) * limit)
    fetchNewJobs(newJobEndpoint+offsetEndpoint+value)
    setOffset(value)
      
  
  };
  const handleClearFilter = () => {
      setPosition("");
      setClearFilterNewJob(false);
      fetchNewJobs(newJobEndpoint+offsetEndpoint+offset)
    };

  return (
    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
   New Jobs
    </Typography>

   
      <Box>
      <Box
      sx={{
        backgroundColor: "#dbdde1",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <Stack spacing={2} direction="row">
        <SelectOption
          name="new_jobs"
          label="Position Type"
          size="small"
          selectCss={{ width: "200px" }}
          data={positions}
          value={position}
          onChange={handleChange}

        />
        {clearFilterNewJob && (
          <IconButton onClick={handleClearFilter}>
            <CloseIcon />
          </IconButton>
        )}
      </Stack>
    </Box>
      <Box>
        <TableMui
          styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
          th={{
              position: "Facility Name",
              location: "Location",
              unit: "Unit",
              shift: "Shift",
              speciality: "Speciality",
              profession: "Profession",
              id: "Submittals",
          }}
          td={apiJobs.data.results}
          link={"/client/active-job/"}
          btnName="Detail"
          btnSize="small"
          btnStyle={{
            backgroundColor: "#b09150",
            "&:hover": { backgroundColor: "#c9a55a" },
          }}
        />
       
      </Box>
    </Box>
    <Paginate  count={count} limit={limit} onChange={handlePageChange}/>
</Box>
  )
}
const ActiveSubmissle=()=>{


const [count,setCount]=useState(0)


const {data,request}=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

let Endpoint = `applications/?limit=${limit}&offset=`;
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
          candidate: "Candidate",
          starting_date: "Starting Date",
          social_security_number: "Social Security Number",
          driver_license: "Driver License",
          professional_license_verification:
            "Professional License Verification",
          bill_rate: "Bill Rate",
          compliance_per_agency: "Compliance Per Agency",
          submitals_per_agency: "Submittal Per Agency",
          job_post_id: "Detail",
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


const CurrentlyWorking=()=>{
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
setCount(response.data.count)


}



const handlePageChange = (event,value) => {
  
  value=((value - 1) * limit)
  fetchData(Endpoint+value)
  setOffset(value)
    


}

  return (

    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
   Currently Working
    </Typography>

      <Box>
        <TableMui
          styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
          th={{
            candidate: "Candidate",
            starting_date: "Starting Date",
            social_security_number: "Social Security Number",
            driver_license: "Driver License",
            professional_license_verification:
              "Professional License Verification",
            bill_rate: "Bill Rate",
            compliance_per_agency: "Compliance Per Agency",
            submitals_per_agency: "Submittal Per Agency",
            job_post_id: "Detail",
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












