import { Box } from "@mui/material";
import React from "react";
import styles from './filterbar.module.css'
import GenericAutocomplete from "../Filters/autocomplete";

const FilterBar = () =>{
    return (
        <Box className={styles['filter-container']}>
            <GenericAutocomplete/>
            <GenericAutocomplete/>
            <GenericAutocomplete/>    
        </Box>
    )
}

export default FilterBar