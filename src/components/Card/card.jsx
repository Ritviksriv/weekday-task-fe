import React from "react";
import HourglassEmptyRoundedIcon from "@mui/icons-material/HourglassEmptyRounded";
import styles from "./card.module.css";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Link,
    capitalize
  } from "@mui/material";

const JobCard = (props) => {
  const { jobData } = props;
  return (
    <Card
      sx={{
        maxWidth: 350,
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.12)",
        transition: "transform 0.2s ease-in-out",
        borderRadius: "16px",
        mb: 3,
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardContent>
        <Box className={styles["tag-styles"]}>
          <HourglassEmptyRoundedIcon sx={{ fontSize: 12, mr: 0.5 }} />
          <Typography color="text.secondary" sx={{ fontSize: 10, mr: 0.5 }}>
            Posted 2 hours ago
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              {capitalize(jobData?.jobRole) || "X Company"}
            </Typography>
            <Typography color="text.secondary">
              {capitalize(jobData?.location) || "X Location"}
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: 14, mb: 2, fontWeight: 400 }}>
          Estimated Salary:{" "}
          {jobData.minJdSalary
            ? `₹${jobData.minJdSalary} - ₹${jobData.maxJdSalary} LPA`
            : "0 LPA"}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>About Company:</Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: 14 }}
        >
          About us
        </Typography>
        <Typography variant="body2" className={styles["text-ellipsis"]}>
          {jobData.jobDetailsFromCompany}
        </Typography>
        <Link
          sx={{
            mt: 1,
            mb: 1,
            display: "flex",
            justifyContent: "center",
          }}
          href={jobData.jdLink}
          underline="none"
          target="_blank"
        >
          View job
        </Link>
        <Typography
          sx={{ fontSize: "14px", fontWeight: "bold", color: "gray" }}
        >
          Minimum Experience
        </Typography>
        <Typography sx={{ fontSize: "14px", mb: 2 }}>
          {jobData?.minExp || "0"} years
        </Typography>
        <Button
          sx={{
            backgroundColor: "#01F9C6",
            color: "black",
            fontSize: "14px",
            height: 40,
            "&:hover": {
              backgroundColor: "#01F9C6",
            },
          }}
          variant="contained"
          fullWidth
        >
          Easy Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
