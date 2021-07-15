import React from "react";

interface Props {
  name?: string;
  email?: string;
}

const Title = (props: Props) => {
  const { name } = props;
  return <h1>{name}</h1>;
};
export default Title;
