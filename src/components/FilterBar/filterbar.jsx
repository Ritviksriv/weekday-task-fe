import { Box, Grid, TextField } from "@mui/material";
import GenericAutocomplete from "../Filters/autocomplete";
import { ROLES_OPTIONS_MAP } from "../../constants/constants";
import { HEADCOUNT_OPTIONS_MAP } from "../../constants/constants";
import { EXPERIENCE_OPTIONS_MAP } from "../../constants/constants";
import { MODE_OPTIONS_MAP } from "../../constants/constants";
import { SALARY_OPTIONS_MAP } from "../../constants/constants";
import styles from "./filterbar.module.css";

const FilterBar = () => {
  return (
    <Box className={styles["filter-container"]}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={ROLES_OPTIONS_MAP}
            label="Roles"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={HEADCOUNT_OPTIONS_MAP}
            label="Number of Employees"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={false}
            options={EXPERIENCE_OPTIONS_MAP}
            label="Experience"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={MODE_OPTIONS_MAP}
            label="Mode"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            options={SALARY_OPTIONS_MAP}
            multiple={true}
            label="Minimum Base Pay Salary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField fullWidth label="Search Company Name" variant="outlined" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterBar;
