import React from "react";
import { Box,TextField } from "@mui/material";

const SearchBar = () =>{
    return (
        <Box>
            <TextField
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
        />
        </Box>
    )
}

export default SearchBar