import React, { ChangeEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import { FaShare } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Brain1 from "../../../Assets/Brain1.jpg";
import Brain2 from "../../../Assets/Brain2.jpg";
import Brain3 from "../../../Assets/Brain3.jpg";
import Brain4 from "../../../Assets/Brain4.jpg";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

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
    overflow: "scroll",
    height: "350px",
  },
  image: {
    width: "296px",
    height: "296px",
    margin: theme.spacing(3),
    padding: theme.spacing(1),
  },
  slicesTextField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "100px",
      width: "72px",
      margin: "2px 8px 2px 8px",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EF5DA8",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      textAlign: "center",
    },
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

const SlideImages = [
  { url: Brain1 },
  { url: Brain2 },
  { url: Brain3 },
  { url: Brain4 },
];

const Result = () => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const nextImage = () => {
    if (index == SlideImages.length - 1) {
      return SlideImages[SlideImages.length - 1];
    }
    setIndex(index + 1);
  };
  const prevImage = () => {
    if (index == 0) {
      return SlideImages[0];
    }
    setIndex(index - 1);
  };
  const currentImage = index + 1;
  //checkbox
  const [showHeatMapCheckbox, setshowHeatMapCheckbox] = React.useState({
    showHeatMap: true,
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
        <Typography className={classes.content}>
          Slice
          <TextField
            className={classes.slicesTextField}
            variant="outlined"
            size="small"
            value={currentImage}
          ></TextField>
          / {SlideImages.length}
        </Typography>
        <Toolbar>
          <Box
            flexGrow={1}
            style={{
              transform: "translateX(52%)",
            }}
          >
            <FormControlLabel
              control={<PinkCheckbox onChange={handleChange} />}
              checked={showHeatMapCheckbox.showHeatMap}
              label="Show Heat Map"
              name="showHeatMap"
            />
          </Box>
          <Typography
            style={{
              color: "#EF5DA8",
            }}
          >
            View max probability slice
          </Typography>
        </Toolbar>
        {showHeatMapCheckbox.showHeatMap ? (
          <Paper elevation={3} className={classes.imageContainer}>
            <img src={Brain1} alt="Brain1" className={classes.image} />
            <img src={Brain2} alt="Brain2" className={classes.image} />
          </Paper>
        ) : (
          <Paper elevation={3} className={classes.imageContainer}>
            <ReactScrollWheelHandler
              downHandler={nextImage}
              upHandler={prevImage}
            >
              <img
                src={SlideImages[index].url}
                alt="noHeatMap"
                className={classes.image}
              />
            </ReactScrollWheelHandler>
          </Paper>
        )}
      </Paper>
    </>
  );
};
export default Result;
