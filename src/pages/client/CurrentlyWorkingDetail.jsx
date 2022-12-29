import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";
import apiClient from "../../api/apiClient";
import { PopupFeedback, TableMui } from "../../components/mui";
import { trimDates } from "../../components/trimDate";

export default function () {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
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
