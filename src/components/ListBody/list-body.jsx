import styles from "./list-body.module.css";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/Card/card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, CircularProgress, Box } from "@mui/material";
import { FilterBar } from "../../components/FilterBar/filterbar";
import { useSelector, useDispatch } from "react-redux";
import {
  setJobsList,
  setJobs,
  setOffset,
  setHasMore,
  setFilters,
} from "../../redux/actions";

function jobFilter(jobs, filters) {
    return jobs.filter((job) => {
      const isRoleMatch =
        filters.role.length === 0 ||
        filters.role.some(
          (role) => role.toLowerCase() === job.jobRole.toLowerCase()
        );

      const isExperienceMatch =
        filters.experience.length === 0 ||
        filters.experience.some((exp) => {
          const jobMinExp = Number(job.minExp);
          const jobMaxExp = Number(job.maxExp);
          return exp >= jobMinExp && exp <= jobMaxExp;
        });

      const isSalaryMatch =
        filters.minimumSalary.length === 0 ||
        filters.minimumSalary.some((salaryRange) => {
          const minSalary = Number(salaryRange.slice(0, -1));
          const jobMinSalary = Number(job.minJdSalary);
          const jobMaxSalary = Number(job.maxJdSalary);
          return jobMinSalary >= minSalary;
        });

      return isRoleMatch && isExperienceMatch && isSalaryMatch;
    });
  }

const ListBody = () => {
  const { jobsList, jobs, offset, hasMore, filters } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 50,
        offset: offset,
      }),
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();
        dispatch(setJobsList([...jobsList, ...data.jdList]));
        dispatch(setOffset(offset + 9));
        if (data.jdList.length === 0) {
          dispatch(setHasMore(false));
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const filteredJobs = jobFilter(jobsList, filters);
    dispatch(setJobs(filteredJobs));
  }, [jobsList, filters]);

  return (
    <Box className={styles["list-body-container"]}>
      <InfiniteScroll
        dataLength={jobs.length}
        loader={
          <Box sx={{display:"flex" ,justifyContent:"center"}}>
            Loading jobs...
          </Box>
        }
        endMessage={
          <Box sx={{display:"flex" ,justifyContent:"center"}}>
            <p>You've reached the end!</p>
          </Box>
        }
        scrollThreshold={1}
        next={fetchJobs}
        hasMore={hasMore}
      >
        <Grid
          container
          sx={{ padding: 2 }}
        >
          {jobs.map((job, index) => (
            <Grid item key={index} sm={6} md={4} lg={4}>
              <JobCard jobData={job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default ListBody;
