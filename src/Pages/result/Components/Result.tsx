import React, { ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { FaShare } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import HeatMap1 from "../../../Assets/HeatMap1.jpg";
import HeatMap2 from "../../../Assets/HeatMap2.jpg";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  content: {
    fontSize: "24px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
  },
  image: {
    width: "296px",
    height: "296px",
    margin: theme.spacing(3),
    padding: theme.spacing(1),
  },
}));

const SharePrintDownloadButton = withStyles({
  root: {
    backgroundColor: "#ffffff",
    color: "#757373",
    width: "96px",
    "&:hover": { backgroundColor: "#ffffff", color: "#757373" },
  }, 
})(Button);

const PinkCheckbox = withStyles({
  root: {
    color: "#DFE1E6",
    "&$checked": {
      color: "#EF5DA8",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Result = () => {
  const classes = useStyles();

  //checkbox
  const [showHeatMapCheckbox, setshowHeatMapCheckbox] = React.useState({
    showHeatMap: false,
  });
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setshowHeatMapCheckbox({
      ...showHeatMapCheckbox,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h4">Results</Typography>
          <Typography variant="h6">Test ID:</Typography>
        </Box>
        <SharePrintDownloadButton>
          <Box>
            <Box>
              <FaShare style={{ fontSize: "24px" }} />
            </Box>
            <Typography variant="button">Share</Typography>
          </Box>
        </SharePrintDownloadButton>
        <SharePrintDownloadButton>
          <Box>
            <Box>
              <AiFillPrinter style={{ fontSize: "24px" }} />
            </Box>
            <Typography variant="button">Print</Typography>
          </Box>
        </SharePrintDownloadButton>
        <SharePrintDownloadButton>
          <Box>
            <Box>
              <FiDownload style={{ fontSize: "24px" }} />
            </Box>
            <Typography variant="button">Download</Typography>
          </Box>
        </SharePrintDownloadButton>
      </Toolbar>
      <Paper className={classes.pageContent}>
        <Typography className={classes.content}>
          Cardioembolic Probability
        </Typography>
        <Typography className={classes.content} style={{ color: "#EF5DA8" }}>
          23%
        </Typography>
        <Typography className={classes.content}>Slice 1/30</Typography>
        <Toolbar>
          <Box
            flexGrow={1}
            style={{
              transform:"translateX(52%)"
            }}
          >
            <FormControlLabel
              control={<PinkCheckbox onChange={handleChange} />}
              label="Show Heat Map"
              name="showHeatMap"
            />
          </Box>
          <Typography style={{ color: "#EF5DA8" }}>
            View max probability slice
          </Typography>
        </Toolbar>
        {showHeatMapCheckbox.showHeatMap && (
          <Paper elevation={3} className={classes.imageContainer}>
            <img src={HeatMap1} alt="HeatMap1" className={classes.image} />
            <img src={HeatMap2} alt="HeatMap2" className={classes.image} />
          </Paper>
        )}
      </Paper>
    </>
  );
};
export default Result;
