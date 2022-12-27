import {  Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, {  useState } from 'react';
import {TableMui,SelectOption} from '../../components/mui';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import { useEffect } from 'react';

let limit=10
const NewJobs=()=>{
  const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
  const [position,setPosition]=useState()
  const [positions,setPositions]=useState([])
  const [count,setCount]=useState(0)
  const [loading, setLoading] = useState(false);

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
setLoading(true)
   const response= await apiJobs.request(endpoint)
            
   if(apiJobs.error)
   return console.log("error while retrieve")
   console.log(response.data)
if(!count)
setCount(response.data.count)
setLoading(false)

 
  }
  const fetchPositions = async () => {

    const response= await apiPositions.request('position_types/')
             
    if(apiPositions.error)
    return console.log("error while  retrieve"+response.data)
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
          loading={loading}
          th={{
              position: "Facility Name",
              location: "Location",
              unit: "Unit",
              shift: "Shift",
              speciality: "Speciality",
              profession: "Profession",
              id: "Submittals",
          }}
          td={apiJobs.data}
          link={"/admin/new-job/"}
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


const CurrentlyWorking=()=>{
const [count,setCount]=useState(0)

const [loading, setLoading] = useState(false);
const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
const [offset,setOffset]=useState(0)

let Endpoint = `jobs/?active=true&limit=${limit}&offset=`;
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

    <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
    <Typography variant="h5" sx={{ marginBottom: "10px" }}>
   Currently Working
    </Typography>

      <Box>
        <TableMui
          styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
          loading={loading}
          th={{
            position: "Facility Name",
                location: "Location",
                unit: "Unit",
                shift: "Shift",
                speciality: "Speciality",
                profession: "Profession",
                id: "Submittals",
          }}
          td={data}
          link={"/admin/active-job/"}
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
function AdminDashboard(props) {




  
    return (
        <div>
          

        
<NewJobs/>

      

<CurrentlyWorking />



       
     
      

  
           </div>
    );
}

export default AdminDashboard;