import React from "react";
import styled from "styled-components";
import Background from "../../../assets/StrokeBackground.png";
import LoginLogo from "../../../assets/LoginLogo.png";

//background
export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${Background});
  background-size: cover;
  background-attachment: fixed;
`;
//loginbox
export const StyledFormArea = styled.div`
  position: absolute;
  width: 500px;
  height: 400px;
  left: 500px;
  top: 134px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 40px;
`;
//loginlogo
export const Avatar = styled.div`
  width: 250px;
  height: 100px;
  background-image: url(${LoginLogo});
  background-size: cover;
  background-position: center;
  margin: auto;
  margin-top: 30px;
`;
const SignInForm: React.FC = () => {
  return (
    <>
      <StyledContainer>
        <StyledFormArea>
          <Avatar/>
        </StyledFormArea>
      </StyledContainer>
    </>
  );
};

export default SignInForm;
