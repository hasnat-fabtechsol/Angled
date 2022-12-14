import React from 'react';

import { IconButton, Paper, Stack, Typography } from '@mui/material';
import { Box} from '@mui/system';
import {  useState } from 'react';
import {SelectOption, TableMui} from '../../components/mui';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import CloseIcon from "@mui/icons-material/Close";     
import { useEffect } from 'react';



let limit=10


function Invoices(props) {

  const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
  const [position,setPosition]=useState()
  const [positions,setPositions]=useState([])
  const [data,setData]=useState()
  const [count,setCount]=useState(0)
  

  const apiJobs=useApi((endpoint)=>apiClient.get(endpoint))
  const apiPositions=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

  let offsetEndpoint = `&limit=${limit}&offset=`;
  let newJobEndpoint = `posts/?`;
  let positionFilterEndpoint = "adm/invoice/?position_type=";
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
setData(response.data.results)

 
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

export default Invoices;


