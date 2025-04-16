import CountUp from "react-countup";
import React from "react";
import { blue } from '@mui/material/colors';
import { styled } from "@mui/material/styles";
import { Typography, Paper, Grid, Box } from "@mui/material";
import WaveBody from "../Wave/index2";
import {
  AcheivementsContainer,
  AcheivementsText,
  AcheivementsContainerWave
} from "./AchievementsElements";

// ✅ Use `styled` API instead of `makeStyles`
const CustomPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 25,
  border: `3px solid ${blue[200]}`,
  height: 200,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  elevation: 5,
  margin: theme.spacing(3), // ✅ theme.spacing works correctly here
  minWidth: 200,
  color: "#f1f4f5"
}));

const Acheivements = () => {
  return (
    <AcheivementsContainerWave>
      <AcheivementsContainer>
        <AcheivementsText>
          <h1>उपलब्धियाँ</h1>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CustomPaper elevation={15}>
                <Box p={1}>
                  <CountUp end={120000} duration={5} delay={3} />
                  <Typography variant="h5">मछली पालक</Typography>
                </Box>
              </CustomPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CustomPaper elevation={15}>
                <Box p={2}>
                  <CountUp end={250000} duration={5} delay={3} />
                  <Typography variant="h5">
                    मीट्रिक टन गुणवत्तापूर्ण फीड
                  </Typography>
                </Box>
              </CustomPaper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <CustomPaper elevation={15}>
                <Box p={1}>
                  <CountUp end={35} duration={5} delay={3} />
                  <Typography variant="h5">विशेषज्ञ</Typography>
                </Box>
              </CustomPaper>
            </Grid>
          </Grid>
        </AcheivementsText>
      </AcheivementsContainer>
      <WaveBody />
    </AcheivementsContainerWave>
  );
};

export default Acheivements;
