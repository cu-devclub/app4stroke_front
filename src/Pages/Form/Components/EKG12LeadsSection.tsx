import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "100px",
      paddingTop: "5px",
      marginBottom: "32px",
    },
    buttonColor: {
      "&.Mui-selected": {
        backgroundColor: "#EF5DA8",
        color: "#FFFFFF",
        pointerEvents: "none",
      },
    },
  })
);

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(3),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    marginLeft: "5px",
    width: "180px",
    height: "81px",
    backgroundColor: "#FFFFFF",
    color: "#3A3A3D",
    "&:not(:first-child)": {
      borderRadius: "20px",
    },
    "&:first-child": {
      borderRadius: "20px",
    },
  },
}))(ToggleButtonGroup);

const EKG12LeadsSection: React.FC = () => {
  const classes = useStyle();
  //EKG12 Leads Button
  const [EKG12Leads, setEKG12Leads] = React.useState("");
  const handleEKG12Leads = (
    event: React.MouseEvent<HTMLElement>,
    newEKG12Leads: string
  ) => {
    setEKG12Leads(newEKG12Leads);
  };
  return (
    <Box className={classes.root}>
      {/* Time Course */}
      <Box>
        <StyledToggleButtonGroup
          size="large"
          value={EKG12Leads}
          exclusive
          onChange={handleEKG12Leads}
          aria-label="EKG12 Leads"
        >
          <ToggleButton
            value="Normal"
            aria-label="Normal"
            className={classes.buttonColor}
          >
            <Typography>Normal</Typography>
          </ToggleButton>
          <ToggleButton
            value="AF"
            aria-label="AF"
            className={classes.buttonColor}
          >
            <Typography>AF</Typography>
          </ToggleButton>
          <ToggleButton
            value="Abnormal"
            aria-label="Abnormal"
            className={classes.buttonColor}
          >
            <Typography>Abnormal</Typography>
          </ToggleButton>
          <ToggleButton
            value="N/A"
            aria-label="N/A"
            className={classes.buttonColor}
          >
            <Typography>N/A</Typography>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Box>
    </Box>
  );
};
export default EKG12LeadsSection;
