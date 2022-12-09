import React, { useContext, useState } from "react";
import styled from "styled-components";
import Signin from "./Signin";
import Signup from "./Signup";

export interface IAuthTemplate {}
type AuthType = "signin" | "signup";

const AuthTemplate: React.FC<IAuthTemplate> = ({}) => {
  const [authType, setAuthType] = useState<AuthType>("signin");

  if (authType === "signin") {
    return (
      <SAuthTemplate>
        <div data-testid="main-title" className="title">
          Login
        </div>
        <SToggleAuth authType={authType}>
          <div
            id="signin"
            onClick={() => {
              setAuthType("signin");
            }}
          >
            Sign In
          </div>
          <div
            id="signup"
            onClick={() => {
              setAuthType("signup");
            }}
          >
            Sign Up
          </div>
        </SToggleAuth>
        <Signin />
      </SAuthTemplate>
    );
  }

  if (authType === "signup") {
    return (
      <SAuthTemplate>
        <div data-testid="main-title" className="title">
          Register
        </div>
        <SToggleAuth authType={authType}>
          <div
            id="signin"
            onClick={() => {
              setAuthType("signin");
            }}
          >
            Sign In
          </div>
          <div
            id="signup"
            onClick={() => {
              setAuthType("signup");
            }}
          >
            Sign Up
          </div>
        </SToggleAuth>
        <Signup />
      </SAuthTemplate>
    );
  }
  return null;
};

export default AuthTemplate;

const SAuthTemplate = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 32px;
  background-color: #ffffffe7;
  border-radius: 10px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px #b8b8b84c,
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  ${(props) => props.theme.fn.media({ to: "lg" })} {
    left: 50%;
  }

  & .title {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 25px;
    color: #5b5b5b;
    ${(props) => props.theme.fn.media({ to: "md" })} {
      margin: 0 20px;
    }
  }
`;

const SToggleAuth = styled.div<{ authType: AuthType }>`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;
  color: #4e87f8;

  width: 170px;
  padding: 10px 0;
  cursor: pointer;
  width: 50%;
  & #signin {
    border-bottom: ${(props) =>
      props.authType === "signin" ? "2px #4E87F8 solid" : "none"};
  }
  & #signup {
    border-bottom: ${(props) =>
      props.authType === "signin" ? "none" : "2px #4E87F8 solid"};
  }
`;
