import React from 'react';

import { Pagination, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import {  useState } from 'react';
import { TableMui, SelectOption } from "../../components/mui";
import Paginate from '../../components/FrontEndPaginate';

const TableWrapper=({title,children})=>{
    return (
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        {title}
        </Typography>
{children}
        </Box>
    )
}



const CurrentlyWorking=({data})=>{
    const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
    const [position,setPosition]=useState()
    const handleClearFilter = () => {
        setPosition("");
        setClearFilterNewJob(false);
      };
    return (

 
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
     
    )
}


function Resume(props) {

    const workingData=[{"id":4,"position":"Bruno Zimmerman","position_type":1,"location":"Shelly Hickman","unit":"Levi Decker","shift":"Day","speciality":"Savannah Barrett","profession":"Callum Cardenas"},{"id":1,"position":"Nevada Gill","position_type":2,"location":"Melvin","unit":"Lois Clemons","shift":"Day","speciality":"Laith Romero","profession":"Brielle Camacho"}]
 
    return (
        <TableWrapper title={"Resume"}>

        <Paginate data={workingData} postsPerPage={1} style={{display:'flex',justifyContent:'flex-end'}} >
          
        <CurrentlyWorking />
        </Paginate>
        </TableWrapper>
    );
}

export default Resume;


