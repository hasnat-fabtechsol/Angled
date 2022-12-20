import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Toolbar, Typography,Paper } from "@mui/material";
import { trimDate } from "../../components/trimDate";
import apiClient from "../../api/apiClient";
import { PopupFeedback ,TableMui} from "../../components/mui";

export default function () {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    const { data } = await apiClient.get(`/jobs/${id}/employements/`);
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
                sr: "No.",
                starting_date: "Date",
                candidate: "Candidate",
                email: "Email Address",
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
