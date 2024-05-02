import { Box } from "@mui/material";
import React from "react";
import styles from './filterbar.module.css'
import GenericAutocomplete from "../Filters/autocomplete";
import SearchBar from "../Filters/search";

const FilterBar = () =>{
    return (
        <Box className={styles['filter-container']}>
          <GenericAutocomplete/>
          <GenericAutocomplete/>
          <GenericAutocomplete/>
          <GenericAutocomplete multiple={true}/>
          <GenericAutocomplete/>
          <SearchBar/>

        </Box>
    )
}

export default FilterBar