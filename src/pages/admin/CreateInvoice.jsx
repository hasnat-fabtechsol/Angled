import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import DateField from '../../components/mui/DateField'
import PopupWithButton from '../../components/mui/PopupWithButton'
import apiClient from "../../api/apiClient";

const CreateInvoice = () => {
  const [open, setOpen] = useState(true);
  const [dateValue, setDateValue] = useState("");
  let navigate = useNavigate();
  let { id } = useParams();

  const assignClick = () => {
    if (!dateValue) return;
    const data = {
      ending_date: dateValue,
    };
    apiClient.put(`/jobs/${id}/employements/`, data).then((resp) => {
      console.log(resp);
      resp.status === 200 && navigate("/admin/dashboard");
    });
  };

  const cancelClick = () => {
    console.log("cancel Click");
    navigate(-1);
  };

  const dateChange = (e) => {
    setDateValue(e.target.value);
  };

  return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${240}px)` },
          overflow: "auto",
        }}
      >
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <PopupWithButton
            title="Create Invoice"
            content=<DateField change={dateChange} />
            isOpen={open}
            yesName="Create"
            yesClick={assignClick}
            cancelName="Cancel"
            cancelClick={cancelClick}
          />
        </Box>
      </Box>
  );
};

export default CreateInvoice;
