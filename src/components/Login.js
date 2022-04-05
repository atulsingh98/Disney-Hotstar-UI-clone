import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="images\cta-logo-one.svg"></CTALogoOne>
          <SignUp>GET ALL THREE</SignUp>

          <Description>
            Get Premier Access to Raya and the Last Dragon for an adtional fee
            with a Disney+ and the Disney Bundle will increase by $1.
          </Description>
          <CTAlogotwo src="/images\cta-logo-two.png"></CTAlogotwo>
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2vw;
  transition: all 0.2s easein-out;
  max-width: 650px;
  width: 100%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  font-size: 18px;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1rem;
  margin: 0 0 24px;
  line-height: 1.5;
`;
const CTAlogotwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
