import React from "react";
import FilterBar from "../components/FilterBar/filterbar";
import { Box } from "@mui/material";
import "../App.css";
import ListBody from "../components/ListBody/list-body";

const MainLayout = ()=>{
    return (
        <Box className="main-layout-container">
            <FilterBar/>
            <ListBody/>
        </Box>
    )
}
export default MainLayout