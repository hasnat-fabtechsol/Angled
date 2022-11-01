import {  Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, {  useState } from 'react';
import {TableMui,SelectOption} from '../../components/mui';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
const NewJobs=({data})=>{
    const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
    const [position,setPosition]=useState()
    const handleClearFilter = () => {
        setPosition("");
        setClearFilterNewJob(false);
      };

    return (
      
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
            data={[{"id":2,"name":"Part Time"},{"id":1,"name":"Full Time"}]}
            value={position}
            onChange={(e)=>{
                setClearFilterNewJob(true)
                setPosition(e.target.value)}}

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
function AdminDashboard(props) {
    const newJobs=[{"id":3,"position":"abc","position_type":"Full Time","location":"sjahakshds","unit":"1","shift":"N","speciality":"nursing","profession":"doc"},{"id":2,"position":"Fletcher Bradford","position_type":"Part Time","location":"Colt","unit":"Giacomo Peterson","shift":"D","speciality":"Joseph Larsen","profession":"Amena Pugh"}]
   
    const workingData=[{"id":4,"position":"Bruno Zimmerman","position_type":1,"location":"Shelly Hickman","unit":"Levi Decker","shift":"Day","speciality":"Savannah Barrett","profession":"Callum Cardenas"},{"id":1,"position":"Nevada Gill","position_type":2,"location":"Melvin","unit":"Lois Clemons","shift":"Day","speciality":"Laith Romero","profession":"Brielle Camacho"}]
 
    return (
        <div>
          

          <TableWrapper title={"New Jobs"}>

          <Paginate data={newJobs} postsPerPage={1} style={{display:'flex',justifyContent:'flex-end'}} >
            
<NewJobs/>
          </Paginate>
          </TableWrapper>

      
<TableWrapper title={"Currently Working"}>

<Paginate data={workingData} postsPerPage={1} style={{display:'flex',justifyContent:'flex-end'}} >
  
<CurrentlyWorking />
</Paginate>
</TableWrapper>



       
     
      

  
           </div>
    );
}

export default AdminDashboard;