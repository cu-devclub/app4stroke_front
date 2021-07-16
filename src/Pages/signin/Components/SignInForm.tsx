import React from "react";
import styled from "styled-components";
import background from "../../../assets/StrokeBackground.png";

//background
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${background});
  background-size: cover;
  background-attachment: fixed;
`;

const SignInForm: React.FC = () => {
  return (
    <>
      <StyledContainer></StyledContainer>
    </>
  );
};

export default SignInForm;
