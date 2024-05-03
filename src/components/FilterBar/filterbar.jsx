import { Box, Grid, TextField } from "@mui/material";
import GenericAutocomplete from "../Filters/autocomplete";
import { ROLES_OPTIONS_MAP } from "../../constants/constants";
import { HEADCOUNT_OPTIONS_MAP } from "../../constants/constants";
import { EXPERIENCE_OPTIONS_MAP } from "../../constants/constants";
import { MODE_OPTIONS_MAP } from "../../constants/constants";
import { SALARY_OPTIONS_MAP } from "../../constants/constants";
import styles from "./filterbar.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/actions";

const FilterBar = () => {
    const dispatch = useDispatch();

    const handleSetFilter = (filterName, value) => {
        dispatch(setFilters(filterName, value));
    };
  return (
    <Box className={styles["filter-container"]}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={ROLES_OPTIONS_MAP}
            label="Roles"
            value="role"
            onChange={handleSetFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={HEADCOUNT_OPTIONS_MAP}
            label="Number of Employees"
            value="numberOfEmployees"
            onChange={handleSetFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={false}
            options={EXPERIENCE_OPTIONS_MAP}
            label="Experience"
            value="experience"
            onChange={handleSetFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            multiple={true}
            options={MODE_OPTIONS_MAP}
            label="Mode"
            value="mode"
            onChange={handleSetFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <GenericAutocomplete
            options={SALARY_OPTIONS_MAP}
            multiple={true}
            label="Minimum Base Pay Salary"
            value="minimumSalary"
            onChange={handleSetFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField fullWidth label="Search Company Name" variant="outlined"  onChange={(e) => {
                dispatch(setFilters("companyName", e.target.value))
            }}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterBar;
