import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

interface Props {
  name: string;
  onClick: (e: any) => void;
}

const useStyle = makeStyles(() =>
  createStyles({
    button: {
      minWidth: "8px",
      padding: "8px",
    },
  })
);

const FileItem = (props: Props) => {
  const classes = useStyle();

  const { name, onClick } = props;

  return (
    <Grid container spacing={1}>
      <Grid item style={{ cursor: "pointer" }}>
        <TiDeleteOutline
          id={name}
          onClick={onClick}
          color="#FF4181"
          size="24px"
        />
      </Grid>
      <Grid item>
        <Typography display="inline">{name}</Typography>
      </Grid>
    </Grid>
  );
};

export default FileItem;
