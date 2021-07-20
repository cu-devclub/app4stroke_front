import React from "react";
import { Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
    },
    text: {
      "&.MuiDivider-root": {
        "&::before": {
          borderTop: "none",
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
    <Box>
      <Box className={classes.root}>
        <Divider className={classes.text} textAlign="left">
          <div>{title}</div>
        </Divider>
      </Box>
    </Box>
  );
};

export default SectionTitle;
