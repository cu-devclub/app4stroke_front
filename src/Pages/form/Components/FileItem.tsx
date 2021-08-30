import React from "react";
import Typography from "@material-ui/core/Typography";
import { TiDeleteOutline } from "react-icons/ti";
import Grid from "@material-ui/core/Grid";

interface Props {
  name: string;
  onClick: (e: any) => void;
}

const FileItem = (props: Props) => {
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
