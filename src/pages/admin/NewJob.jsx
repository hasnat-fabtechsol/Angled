import React, { useState } from "react";
import { Box, Stack, TextField } from "@mui/material";
import { AdminButton, PopupFeedback, SelectOption } from "../../components/mui";
import useApi from "../../hooks/useApi";
import apiClient from "../../api/apiClient";
import { useEffect } from "react";

export default function NewJob() {
  let empyFields = {
    position: "",
    position_type: "",
    location: "",
    unit: "",
    shift: "",
    speciality: "",
    profession: "",
  };
  const [newPosition, setNewPosition] = useState(empyFields);

  const [positionType, setPositionType] = useState([]);
  const [shift, setShift] = useState([]);


const {request}=useApi((data)=>apiClient.post('/jobs/',data))


  const [disabledButton, setDisabledButton] = useState(false);
  useEffect(() => {
    fetchPositionType();
    fetchShift();
  }, []);

  const fetchPositionType = async () => {
    const { data } = await apiClient.get('position_types/');
    setPositionType(data.results);
  };

  const fetchShift = async () => {
    const { data } = await apiClient.get('job_shifts/');
    setShift(data.results);
  };

  const handleChange = (event) => {
    // disabledButton && setDisabledButton(false);
    const { name, value } = event.target;
    setNewPosition({ ...newPosition, [name]: value });
  };

  const [open, setOpen] = useState(false);
  const [getPositionName, setGetPositionName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // !disabledButton && setDisabledButton(true);
    // console.log(newPosition)
    const result= await request(newPosition)
    if (!result.data) return
      setDisabledButton(false);
      setOpen(true);
      setNewPosition(empyFields);
      setGetPositionName(result.data.position);
    
    setGetPositionName(newPosition.position)
      setOpen(true);
      setNewPosition(empyFields);
    
  };

  return (
  
      <Box   >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form className="" onSubmit={handleSubmit}>
            <h4 style={{ textAlign: "center" }}>New Positions</h4>
            <TextField
              required
              label="Facility Name"
              name="position"
              inputProps={{ maxLength: 150 }}
              id="outlined-name"
              onChange={handleChange}
              value={newPosition.position}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <Box sx={{ width: "290px" }}>
                <SelectOption
                  name="position_type"
                  label="Position Type"
                  value={newPosition.position_type}
                  onChange={handleChange}
                  data={positionType}
                  style={{ width: "100%" }}
                />
              </Box>
              <TextField
                required
                label="Location"
                name="location"
                inputProps={{ maxLength: 10 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.location}
                sx={{ width: "290px" }}
              />
            </Stack>
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                label="Unit"
                name="unit"
                inputProps={{ maxLength: 30 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.unit}
                sx={{ width: "290px" }}
              />
              <Box sx={{ width: "290px" }}>
                <SelectOption
                  name="shift"
                  label="Shift"
                  value={newPosition.shift}
                  onChange={handleChange}
                  data={shift}
                  style={{ width: "100%" }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                label="Speciality"
                name="speciality"
                inputProps={{ maxLength: 30 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.speciality}
                sx={{ width: "290px" }}
              />
              <TextField
                required
                label="Profession"
                name="profession"
                inputProps={{ maxLength: 50 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.profession}
                sx={{ width: "290px" }}
              />
            </Stack>
            <AdminButton
              name="Submit"
              type="submit"
              disabled={disabledButton}
              size="medium"
              style={{
                backgroundColor: "#00184c",
                "&:hover": { backgroundColor: "#002370" },
                whiteSpace: "nowrap",
              }}
            />
          </form>
        </Box>
        <PopupFeedback
          title="Form Submitted Successfully"
          content={`Job Created Successfully for position ` + getPositionName}
          isOpen={open}
        />
      </Box>
   
  );
}
