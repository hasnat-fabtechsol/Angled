import React, { useState } from "react";
import { Box, TextField, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import apiClient from "../../api/apiClient";
import { AdminButton, PopupFeedback } from "../../components/mui";
import { LoadingOverlaySmall } from "../../components/mui/LoadingOverlay";


export default function AddNew() {
  const { id } = useParams();
  let emptyFields = {
    job_post: id,
    candidate_name: "",
    phone: "",
    email: "",
    social_security_number: "",
    driver_license: "",
    professional_license_verification: "2094582",
    bill_rate: "",
    compliance_per_agency: "",
    submitals_per_agency: "",
  };
  const [addNew, setAddNew] = useState(emptyFields);
  const [message, setMessage] = useState({text:"",color:""});
  const [disabledButton, setDisabledButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddNew({ ...addNew, [name]: value });
  };

  const [open, setOpen] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    resetErrors()
  setLoading(true)
    const response = await apiClient.post("/applications/", addNew);
    setLoading(false)
    if (response.status === 201) {
      setOpen(true);
      setAddNew(emptyFields);
      setMessage({text:"Successfully applied to Job post",color:"success"})
    }
    else
    return setMessage({text:"Failed to Apply Please try again",color:"danger"})
 
  };
  function resetErrors(){
    setMessage({text:"",color:""})
  }


  return (
   <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form className="" onSubmit={handleSubmit}>
          {message.text&& <div className={`bg-${message.color} p-1 m-2`}>
                  <span>{message.text}</span>
                </div>}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
               
              <TextField
                required
                type="text"
                label="Candidate Name"
                name="candidate_name"
                value={addNew.candidate_name}
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
              <TextField
                required
                // type="number"
                name="phone"
                inputProps={{ maxLength: 16 }}
                value={addNew.phone}
                label="Cell No"
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
            </Stack>
            <TextField
              required
              type="email"
              name="email"
              value={addNew.email}
              label="Email"
              id="outlined-name"
              onChange={handleChange}
              onFocus={resetErrors}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                type="text"
                name="social_security_number"
                value={addNew.social_security_number}
                inputProps={{ maxLength: 11 }}
                label="Social Security Number"
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
              <TextField
                required
                type="text"
                name="driver_license"
                value={addNew.driver_license}
                inputProps={{ maxLength: 8 }}
                label="Driver License or ID"
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                name="bill_rate"
                value={addNew.bill_rate}
                label="Bill Rate"
                id="outlined-name"
                onChange={handleChange}
                onFocus={resetErrors}
                type="number"
                // InputProps={{ inputProps: { min: 0, max: 10 } }}
                sx={{ width: { xs: "100%" } }}
              />
            </Stack>
            <TextField
              required
              name="compliance_per_agency"
              value={addNew.compliance_per_agency}
              label="Compliance Per Agency"
              id="outlined-name"
              onChange={handleChange}
              onFocus={resetErrors}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <TextField
              required
              name="submitals_per_agency"
              value={addNew.submitals_per_agency}
              label="Submittals Per Agency"
              id="outlined-name"
              onChange={handleChange}
              onFocus={resetErrors}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction="column"
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
           {!loading?   <AdminButton
                name="Submit"
                type="submit"
                disabled={disabledButton}
                size="medium"
                style={{
                  backgroundColor: "#00184c",
                  "&:hover": { backgroundColor: "#002370" },
                  whiteSpace: "nowrap",
                }}
              />: <LoadingOverlaySmall open={loading}/>}
            </Stack>
          </form>
        </Box>
        <PopupFeedback
          title="Form Submitted Successfully"
          content={`Job Application Created Successfully`}
          isOpen={open}
        />
        </Box>
    
  );
}
