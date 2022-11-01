import React from "react";
import { Box, Pagination } from "@mui/material";

const Paginate = ({ count,limit=10, onChange, defaultNumber }) => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <Pagination
        count={Math.ceil(count /limit)}
        color="primary"
        variant="outlined"
        shape="rounded"
        defaultPage={defaultNumber}
        onChange={ (event, value) => onChange(event, value)}
      />
    </Box>
  );
};
export default Paginate;
