import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./autocomplete.module.css";
import { Box } from "@mui/material";

const GenericAutocomplete = (props) => {
  const { multiple, options, value, label, onChange } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, currValue) => {
    setSelectedOptions(currValue);
    if (multiple) {
      onChange(
        value,
        currValue.map((option) => option.label)
      );
    } else {
      onChange(value, currValue ? currValue.label : "");
    }
  };
  return (
    <Box>
      <Autocomplete
        multiple={multiple}
        options={options}
        value={
          selectedOptions?.length <= 0 ? selectedOptions[0] : selectedOptions
        }
        onChange={handleChange}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        className={styles["autocomplete-style"]}
        renderInput={(params) => (
          <TextField {...params} label={label} fullWidth />
        )}
      />
    </Box>
  );
};

export default GenericAutocomplete;
