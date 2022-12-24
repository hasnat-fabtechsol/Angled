import React from 'react';

import { IconButton, Paper, Stack, Typography } from '@mui/material';
import { Box} from '@mui/system';
import {  useState } from 'react';
import {AdminButton, SelectOption, TableMui} from '../../components/mui';
import Paginate from '../../components/Paginate';
import useApi from '../../hooks/useApi';
import apiClient from '../../api/apiClient';
import CloseIcon from "@mui/icons-material/Close";     
import { useEffect } from 'react';



let limit=10


const Invoices=()=>{
  const [count,setCount]=useState(0)
  
  
  const {data,error,request}=useApi((endpoint)=>apiClient.get(endpoint))
  const [offset,setOffset]=useState(0)
  
  let Endpoint = `jobs/?closed=true&limit=${limit}&offset=`;
  useEffect(()=>{
    fetchData(Endpoint+offset)
  },[])
  const fetchData = async (endpoint) => {
  
   const response= await request(endpoint)
   console.log(response)
            
   if(error)
   return console.log("error while retrieve")
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
              position: "Facility Name",
                  location: "Location",
                  unit: "Unit",
                  ending_date: "Starting Date",
                  ending_date: "Ending Date",
                  shift: "Shift",
                  speciality: "Speciality",
                  profession: "Profession",
                  id: "Submittals",
            }}
            td={data}
            link={"/admin/invoice/"}
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

export default Invoices;



// import apiClient from "../../api/apiClient";

// const CreateInvoice = () => {
//   const [dateValue, setDateValue] = useState("");

//   const assignClick = () => {
//     if (!dateValue) return;
//     const data = {
//       ending_date: dateValue,
//     };
//     apiClient.put(`/jobs/${id}/employements/`, data).then((resp) => {
//       resp.status === 200 && navigate("/admin/dashboard");
//     });
//   };

  

//   return (
//     <AdminButton className="btn btn-danger" style={{backgroundColor:'red'}} onClick={()=>(item.id)}
//     name="Create Invoice"
  
//   />
//   );
// };

