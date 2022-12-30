import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";
import apiClient from "../../api/apiClient";
import { AdminButton, PopupFeedback, PopupWithButton, TableMui } from "../../components/mui";
import { trimDates } from "../../components/trimDate";
import DateField from "../../components/mui/DateField";

export default function () {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    setLoading(true)
    const {
      data: { results },
    } = await apiClient.get(`jobs/${id}/applications/`);
    const updatedData = trimDates(results, "applied_at");
    setActiveJobDetail(updatedData);
    setLoading(false)
  };

  useEffect(() => {
    fetchJobDetail();
  }, []);

  return (
 <>
        {activeJobData ? (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Employee Detail
            </Typography>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              loading={loading}
              th={{
                sr: "No.",
                applied_at: "Date",
                candidate_name: "Candidate",
                email: "Email Address",
                // skills: "Skills",
                location: "Location",
              }}
              td={activeJobDetail}
              customBtn={(item)=>CustomBtn(item.id)}
            />
          </Box>
        ) : (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              No Employee Found!
            </Typography>
          </Box>
        )}
        <PopupFeedback
          title="Employee Detail"
          content={`Details haven't recieved yet!`}
          isOpen={open}
        />
      </>
  );
}


function CustomBtn(id){
  const [open, setOpen] = useState(false);

  const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]);
  let  navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const [message, setMessage] = useState({text:"",color:""});

  const assignClick = () => {
    if (!dateValue) return;
    const data = {
      application: id,
      starting_date: dateValue,
    };
    setLoading(true)
    apiClient.post(`/jobs/${id}/employements/`, data).then((resp) => {
      setLoading(false)
      resp.status === 201 && navigate("/admin/dashboard");
      setMessage({text:"Failed to create Invoice Please try again",color:"danger"})
    });
  };

  const cancelClick = () => {
   setOpen(false)
  };

  const dateChange = (e) => {
    setDateValue(e.target.value);
  };
  return (
  <>
  <AdminButton
                          name="Assign Job"
                          style={{whiteSpace:'nowrap',backgroundColor: "#b09150",
                          "&:hover": { backgroundColor: "#c9a55a" }}}
                          onClick={()=>setOpen(true)}
                        />
 
 <PopupWithButton
            title="ASSIGN JOB"
            content={<><DateField value={dateValue} change={dateChange} />
              {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>}
            </>}
            isOpen={open}
            loading={loading}
            yesName="Assign"
            yesClick={()=>assignClick()}
            cancelName="Cancel"
            cancelClick={cancelClick}
          />
  </>
  );
  }