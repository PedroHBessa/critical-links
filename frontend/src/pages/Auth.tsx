import React from "react";
import styled from "styled-components";
import AuthTemplate from "../components/auth/AuthTemplate";

function Auth() {
  return (
    <SAuth>
      <SHomeText>
        <div className="home-text">
          <h1 className="title">CRITICAL LINKS</h1>
          <h2 className="slide-title">CONNECTING STUDENTS TO KNOWLEDGE</h2>
          <p className="slider-description">
            We enable world-class, innovative e-Learning, especially in
            challenging environments.
          </p>
          <p className="description">
            Nowhere is the Digital Divide more apparent than in Education,
            caused by limitations in infrastructure & connectivity worldwide
            which separate students from internet-based pools of knowledge. The
            result is an inability for developing/emerging nations to
            participate in globalized knowledge and learning. To address this
            issue, the industry is embracing the innovative new micro-cloud
            architecture cross this divide. The C3 Micro-Cloud is your answer to
            a global problem!
          </p>
        </div>
      </SHomeText>
      <AuthTemplate />
    </SAuth>
  );
}

export default Auth;

const SAuth = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://www.critical-links.com/wp-content/uploads/2022/03/home-min.png");
  background-position: center;
  background-size: cover;
`;

const SHomeText = styled.div`
  ${(props) => props.theme.fn.media({ to: "lg" })} {
    display: none;
  }
  & .home-text {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 45%;
    & .title {
      font-size: 48px;
      line-height: 48px;
      font-weight: 600;
      padding-bottom: 20px;
      color: #fff;
      margin: 0;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
    & .slide-title {
      font-size: 28px;
      line-height: 48px;
      font-weight: 100;
      color: #fff;
      margin: 0;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
    }
    & .slider-description {
      font-family: "Open Sans", sans-serif;
      color: #fff;
      font-size: 20px;
      line-height: 34px;
      margin: 20px 0 0;
    }
    & .description {
      font-family: "Nunito Sans", sans-serif;
      color: #fff;
      font-size: 16px;
      line-height: 20px;
      margin: 20px 0 0;
    }
  }
`;
