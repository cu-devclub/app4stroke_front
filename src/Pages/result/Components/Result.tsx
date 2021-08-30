import React, { ChangeEvent, useRef, WheelEvent } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Link from "@material-ui/core/Link";
import { FaShare } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { ResultProps } from "../../../interfaces";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    height: "80%",
    marginTop: "32px",
    padding: "32px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  textLayoutContent: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    borderRadius: "16px",
    border: "1px solid #D3D3D3",
    padding: "16px 0 16px 0px",
  },
  image: {
    width: "480px",
    height: "480px",
  },
  slicesTextField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "100px",
      width: "72px",
      margin: "2px 8px 2px 8px",
      fontSize: "16px",
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EF5DA8",
    },
    "& .MuiOutlinedInput-inputMarginDense": {
      textAlign: "center",
    },
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
      {
        display: "none",
      },
  },
  boxImage: {
    background: "#222224",
    color: "#FFFFFF",
    fontSize: "20px",
    borderRadius: "8px",
    width: " 312px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: "8px",
    right: "16px",
  },
  dialog: {
    "&& .MuiDialog-paperWidthSm": {
      maxWidth: "1000px",
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

const Result = (props: ResultProps): JSX.Element => {
  const { testId, prob, heatmapImageList, ctScanImageList } = props;
  const classes = useStyles();
  const [index, setIndex] = React.useState<number>(1);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const wheelTimeout = useRef();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = (event: WheelEvent<HTMLImageElement>) => {
    const { deltaY } = event;

    if (deltaY < 0 && currentIndex > 0) {
      setIndex(index - 1);
      setCurrentIndex(currentIndex - 1);
    } else if (deltaY >= 0 && currentIndex < ctScanImageList.length - 1) {
      setIndex(index + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };
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
    <Box height="100%">
      <Dialog
        onClose={handleClose}
        aria-labelledby="MaxProb"
        open={open}
        maxWidth={"lg"}
      >
        <MuiDialogContent>
          <Box display="flex">
            {!showHeatMapCheckbox.showHeatMap ? (
              <img
                src={ctScanImageList[currentIndex].url}
                alt="Brain2"
                style={{ height: "550px", width: "550px" }}
              />
            ) : (
              <>
                <img
                  alt="Brain1"
                  className={classes.image}
                  src={heatmapImageList[currentIndex].url1}
                  style={{ marginRight: "8px" }}
                />
                <img
                  alt="Brain2"
                  className={classes.image}
                  src={heatmapImageList[currentIndex].url2}
                  style={{ marginLeft: "8px" }}
                />
              </>
            )}
          </Box>
        </MuiDialogContent>
      </Dialog>
      <Box
        height="20%"
        display="flex"
        justifyContent="space-between"
        marginTop={8}
      >
        <Box>
          <Typography variant="h4">Results</Typography>
          <Typography variant="h6">Test ID:</Typography>
        </Box>
        <Box>
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
        </Box>
      </Box>
      <Paper className={classes.pageContent}>
        <Typography className={`${classes.textLayoutContent} ${classes.title}`}>
          Cardioembolic Probability
        </Typography>
        <Typography
          className={`${classes.textLayoutContent} ${classes.title}`}
          style={{ color: "#EF5DA8" }}
        >
          23%
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="24px"
          marginTop="16px"
          fontWeight="bold"
        >
          Slice
          <TextField
            className={classes.slicesTextField}
            variant="outlined"
            size="small"
            value={index}
            type="number"
            onChange={(e) => {
              if (
                e.target.value !== "" &&
                parseInt(e.target.value) >= 1 &&
                parseInt(e.target.value) <= ctScanImageList.length
              ) {
                setCurrentIndex(parseInt(e.target.value) - 1);
              }
              setIndex(parseInt(e.target.value));
            }}
          ></TextField>
          / {ctScanImageList.length}
        </Box>
        <Toolbar>
          <Box flexGrow={1}>
            <FormControlLabel
              control={<PinkCheckbox onChange={handleChange} />}
              checked={showHeatMapCheckbox.showHeatMap}
              label="Show Heat Map"
              name="showHeatMap"
            />
          </Box>
          <Link
            component="button"
            variant="subtitle1"
            style={{
              color: "#EF5DA8",
            }}
            onClick={handleClickOpen}
          >
            View max probability slice
          </Link>
        </Toolbar>
        <Box className={classes.imageContainer}>
          <Box>
            {!showHeatMapCheckbox.showHeatMap ? (
              <Box position="relative">
                <img
                  src={ctScanImageList[currentIndex].url}
                  alt="noHeatMap"
                  className={classes.image}
                  onWheel={(e: WheelEvent<HTMLImageElement>) => handleScroll(e)}
                />
                <Box className={classes.boxImage}>
                  <Typography>Cardioembolic-Sign Probability: 0.23</Typography>
                </Box>
              </Box>
            ) : (
              <>
                <Box position="relative">
                  <img
                    alt="Brain1"
                    className={classes.image}
                    src={heatmapImageList[currentIndex].url1}
                    onWheel={(e: WheelEvent<HTMLImageElement>) =>
                      handleScroll(e)
                    }
                    style={{ marginRight: "8px" }}
                  />
                  <img
                    alt="Brain2"
                    className={classes.image}
                    src={heatmapImageList[currentIndex].url2}
                    onWheel={(e: WheelEvent<HTMLImageElement>) =>
                      handleScroll(e)
                    }
                    style={{ marginLeft: "8px" }}
                  />
                  <Box className={classes.boxImage}>
                    <Typography>
                      Cardioembolic-Sign Probability: 0.23
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default Result;
