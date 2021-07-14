import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  name?: string;
}
const Title: React.FC<Props> = (props: Props) => {
  return <Typography variant="h1">{props.name}</Typography>;
};

export default Title;
