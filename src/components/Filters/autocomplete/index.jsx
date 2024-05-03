import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './autocomplete.module.css'
import { Box } from '@mui/material';


const GenericAutocomplete = (props) => {
    const { multiple, options, placeholder, label, onChange } = props
  return (
    <Box>
        <Autocomplete
            multiple={multiple}
            options={options}
            value={[]}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            className={styles['autocomplete-style']}
            renderInput={(params) => (
                <TextField {...params} label={label} placeholder={placeholder} fullWidth />
        )}
    />
    </Box>
  );
};

export default GenericAutocomplete;
