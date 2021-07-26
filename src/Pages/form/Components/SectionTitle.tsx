import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: "32px",
      alignItems: "center",
    },
    divider: {
      marginLeft: "16px",
    },
  })
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item xs="auto">
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs className={classes.divider}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
