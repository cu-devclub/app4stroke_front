import React from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "118px",
    },
    text: {
      "&.MuiDivider-root": {
        "&::before": {
          borderTop: "none",
          width: "0",
        },
        "&::after": {
          borderTop: "thin solid #D3D3D3",
          marginTop: "10px",
        },
      },
      "& .MuiDivider-wrapper": {
        fontSize: 36,
      },
    },
  })
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Typography>Patient Information</Typography>
    </Box>
  );
};

export default SectionTitle;
