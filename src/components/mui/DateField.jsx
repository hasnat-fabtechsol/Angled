import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const DateField = ({value, change }) => {
  return (
    <Stack m={1}>
      <TextField
        sx={{ minWidth: { xs: 200, sm: 320 } }}
        name="someDate"
        label="Starting Date"
        // defaultValue={new Date().toISOString().split('T')[0]}
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        size="large"
        value={value}
        onChange={change}
        required={true}
        // defaultValue={values.someDate}
      />
    </Stack>
  );
};

export default DateField;
