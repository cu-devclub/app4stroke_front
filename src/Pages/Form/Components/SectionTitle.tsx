import React from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: "118px",
      alignItems: "center",
    },
  })
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      className={classes.root}
    >
      <Grid item xs="auto">
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs>
        <Divider></Divider>
      </Grid>
    </Grid>
  );
};

export default SectionTitle;
