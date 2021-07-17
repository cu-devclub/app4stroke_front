import React from "react";
import styled from "styled-components";
import Background from "../../../assets/StrokeBackground.png";
import LoginLogo from "../../../assets/LoginLogo.png";
//React router
import {Link} from 'react-router-dom';
//color
export const colors = {
  grey: "#D3D3D3",
  pink:"#EF5DA8",
  white:"#FFFFFF"
};

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
export const Logo = styled.div`
  width: 250px;
  height: 100px;
  background-image: url(${LoginLogo});
  background-size: cover;
  background-position: center;
  margin: auto;
  margin-top: 30px;
`;

//loginbutton
export const StyledFormButton = styled(Link)`
  background:${colors.pink};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  border-radius: 20px;
  text-decoration: none;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 250px;
  height: 2px;
  margin-Left: 50px;
  margin-Right: 50px;
  margin-Top: 30px;
  
  &:hover {
    background-color: ${colors.pink};
    color: ${colors.grey};
    cursor: pointer;
  }
`;

const SignInForm: React.FC = () => {
  return <></>;
};

export default SignInForm;
