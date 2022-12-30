import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Toolbar, Typography,Paper } from "@mui/material";
import { trimDate } from "../../components/trimDate";
import apiClient from "../../api/apiClient";
import { AdminButton, PopupFeedback ,TableMui,PopupWithButton} from "../../components/mui";
import DateField from "../../components/mui/DateField";

export default function () {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    setLoading(true)
    const { data } = await apiClient.get(`/jobs/${id}/employements/`);
    const afterTrimming = trimDate(data, "starting_date");
    if (!afterTrimming) {
      setOpen(true);
      setActiveJobData(false);
    }
    afterTrimming && setActiveJobDetail([afterTrimming]);
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
                starting_date: "Date",
                candidate: "Candidate",
                email: "Email Address",
                location: "Location",
              }}
              customBtn={()=>CustomBtn(id)}
              td={activeJobDetail}
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
  const [loading, setLoading] = useState(false);
  const [dateValue, setDateValue] = useState(new Date().toISOString().split('T')[0]);
  const [message, setMessage] = useState({text:"",color:""});
  let navigate = useNavigate();
  const assignClick = () => {
    if (!dateValue) return;
    const data = {
      ending_date: dateValue,
    };
    setLoading(true)
    apiClient.put(`/jobs/${id}/employements/`, data).then((resp) => {
      setLoading(false)
      resp.status === 200 && navigate("/admin/dashboard");
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
                          name="Create Invoice"
                          style={{whiteSpace:'nowrap',backgroundColor: "#b09150",
                          "&:hover": { backgroundColor: "#c9a55a" }}}
                          btnSize="small"
                         
                          onClick={()=>setOpen(true)}
                        />
 
         <PopupWithButton
            title="Create Invoice"
            content={<><DateField value={dateValue} change={dateChange} />
              {message.text&& <div className={`bg-${message.color} p-1 m-1`}>
                  <span>{message.text}</span>
                </div>}
            </>}
            isOpen={open}
            loading={loading}
            yesName="Create"
            yesClick={assignClick}
            cancelName="Cancel"
            cancelClick={cancelClick}
          />
  </>
  );
  }