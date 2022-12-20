import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CssBaseline, Paper } from "@mui/material";
import apiClient from "../../api/apiClient";
import { trimDate } from "../../components/trimDate";
import { PopupFeedback, TableMui } from "../../components/mui";

export default function() {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    const {
      data,
    } = await apiClient.get(`jobs/${id}/employements/`);
    const afterTrimming = trimDate(data, "starting_date");
    if (!afterTrimming) {
      setOpen(true);
      setActiveJobData(false);
    }
    afterTrimming && setActiveJobDetail([afterTrimming]);
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
              th={{
                "starting_date": "Starting Date",
                "candidate": "Candidate",
                "email": "Email",
                "phone": "Phone",
                "location": "Location",
                "social_security_number": "Social Security Number",
                "driver_license": "Driver License",
                "professional_license_verification": "Professional License Verification",
                "bill_rate": "Bill Rate",
                "compliance_per_agency": "Compliance Per Agency",
                "submitals_per_agency": "Submittals Per Agency"
              }}
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
