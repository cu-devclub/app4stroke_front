import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { classes } from "istanbul-lib-coverage";

const useStyle = makeStyles(() =>
  createStyles({
    box: {
      border: "red",
    },
  })
);

interface Props {
  name: string;
}

const FileItem = (props: Props) => {
  const classes = useStyle();
  const { name } = props;
  return <Box>{name}</Box>;
};

export default FileItem;
