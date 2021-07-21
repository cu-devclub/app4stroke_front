import React from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "118px",
      alignItems: "center",
    },
    title: {
      width: "auto",
    },
    divider: {
      backgroundColor: "#D3D3D3",
      maxWidth: "100%",
      minWidth: "514px",
      // width: "100%",
      marginLeft: "16px",
    },
  })
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyle();
  return (
    <Box className={classes.root} display="flex">
      <Box display="inline">
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
      </Box>
      <Box className={classes.divider}>
        <Divider></Divider>
      </Box>
    </Box>
  );
};

export default SectionTitle;
