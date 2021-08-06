import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { FaShare } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import {FiDownload} from 'react-icons/fi';
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "24px",
  },
  pageTitle: {
    "& .MuiTypography-subtitle2": {
      marginTop: "12%",
      fontSize: "16px",
    },
    "& .MuiTypography-h6": {
      fontSize: "24px",
    },
  },
  buttonGroup: {
    marginLeft: "20%",
  },
  icon: {
    fontSize: "24px",
  },
}));

const SharePrintDownloadButton = withStyles({
  root: {
    backgroundColor: "#ffffff",
    color: "#757373",
    width:"96px",
    "&:hover": { backgroundColor: "#ffffff", color: "#757373" },
  },
})(Button);

const Result = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar className={classes.root}>
        <Box className={classes.pageTitle}>
          <Typography variant="h4">Results</Typography>
          <Typography variant="h6">Test ID:</Typography>
        </Box>
        <Box className={classes.buttonGroup}>
          
          <SharePrintDownloadButton>
            <Box >
              <Box>
                <FaShare className={classes.icon} />
              </Box>
              <Box>
                <Typography variant="button">Share</Typography>
              </Box>
            </Box>
          </SharePrintDownloadButton>
          <SharePrintDownloadButton>
            <Box >
              <Box>
                <AiFillPrinter className={classes.icon} />
              </Box>
              <Box>
                <Typography variant="button">Print</Typography>
              </Box>
            </Box>
          </SharePrintDownloadButton>
          <SharePrintDownloadButton>
            <Box >
              <Box>
                <FiDownload className={classes.icon} />
              </Box>
              <Box>
                <Typography variant="button">Download</Typography>
              </Box>
            </Box>
          </SharePrintDownloadButton>
          
        </Box>
      </Toolbar>
    </>
  );
};
export default Result;
