import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "@material-ui/core/Button";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const useStyle = makeStyles(() =>
  createStyles({
    icon: {
      pointerEvents: "none",
    },
  })
);

// interface Props {
//   name: string;
// }

interface PatientProps {
  file: any[] | null;
}

interface Props {
  values: PatientProps;
}

const FileItem = (props: Props) => {
  const classes = useStyle();

  const { values } = props;

  const handleDeleteFile = (e: any) => {
    console.log("e.target.id", e.target.id);
    console.log("values.file BEFOREEEEE", values.file);
    const fileName = values.file?.filter((i) => i.name !== e.target.id);
    console.log(fileName);
    values.file = fileName !== undefined ? fileName : values.file;
    console.log("values.file AFTERRRRR", values.file);
  };

  return (
    <Box>
      {values.file?.map((a) => (
        <Box>
          <Button onClick={handleDeleteFile} id={a.name}>
            <TiDeleteOutline color="#FF4181" size="24px" />
          </Button>
          <Typography display="inline">{a.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default FileItem;
