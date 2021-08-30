import React, { ChangeEvent } from "react";
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
import Brain1 from "../../../Assets/Brain1.jpg";
import Brain2 from "../../../Assets/Brain2.jpg";
import Brain3 from "../../../Assets/Brain3.jpg";
import Brain4 from "../../../Assets/Brain4.jpg";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  content: {
    fontSize: "32px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    overflow: "scroll",
    height: "424px",
  },
  image: {
    width: "344px",
    height: "344px",
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
  const [index, setIndex] = React.useState<number>(1);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  // const [slideImages,setSlideImages] = useState(CTimageList)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = (event: any) => {
    const { deltaY } = event;
    if (deltaY < 0 && currentIndex > 0) {
      setIndex(index - 1);
      setCurrentIndex(currentIndex - 1);
    } else if (deltaY >= 0 && currentIndex < SlideImages.length - 1) {
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
            value={index}
            type="number"
            onChange={(e) => {
              if (
                e.target.value !== "" &&
                parseInt(e.target.value) >= 1 &&
                parseInt(e.target.value) <= SlideImages.length
              ) {
                setCurrentIndex(parseInt(e.target.value) - 1);
              }
              setIndex(parseInt(e.target.value));
            }}
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
          <Dialog onClose={handleClose} aria-labelledby="MaxProb" open={open}>
            <MuiDialogContent>
              <Box>
                <img
                  src={Brain2}
                  alt="Brain2"
                  style={{ height: "550px", width: "550px" }}
                />
              </Box>
            </MuiDialogContent>
          </Dialog>
        </Toolbar>
        {showHeatMapCheckbox.showHeatMap ? (
          <Paper elevation={3} className={classes.imageContainer}>
            <Box>
              <Box
                className={classes.boxImage}
                style={{ transform: "translate(440px,32px)" }}
              >
                <Typography>Cardioembolic-Sign Probability: 0.23</Typography>
              </Box>
              <Box>
                <img src={Brain1} alt="Brain1" className={classes.image} />
                <img src={Brain2} alt="Brain2" className={classes.image} />
              </Box>
            </Box>
          </Paper>
        ) : (
          <Paper
            elevation={3}
            className={classes.imageContainer}
            style={{ position: "relative" }}
          >
            <Box>
              <Box
                className={classes.boxImage}
                style={{ transform: "translate(48px,32px)" }}
              >
                <Typography>Cardioembolic-Sign Probability: 0.23</Typography>
              </Box>
              <Box>
                <img
                  src={SlideImages[currentIndex].url}
                  alt="noHeatMap"
                  className={classes.image}
                  onWheel={(e) => handleScroll(e)}
                />
              </Box>
            </Box>
          </Paper>
        )}
      </Paper>
    </>
  );
};
export default Result;
