import styled from "styled-components";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  let navigate = useNavigate();
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/logo-transparent.png"  alt="" />
        </a>
        <div>
        <a href = "/signup" >
          <Join>Join now</Join>
        </a>
          <SignIn onClick={() => navigate('/signin')} >Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to the #1 entrepreneurial community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
            <a href = "/signup" >
          <Started >
            <img src="/images/BG_black.png" alt="" />
            Get Started
          </Started>
          </a>
          <Account>
            Already have an account?<span><a href = "/signin">Log in</a></span>         
          </Account>
        <Text>
            <p>Lorem idnw dwido wdiso wdii di wsidws wihdsidiws di wid weiie ie iwf eo w fje Lorem ipsum dolor ipmetr.</p>
        </Text>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
  background-color : #ffeae5;
`;

const Nav = styled.nav`
  max-width: 100%;
  margin-left : 5vh;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    height: 5vh;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
    
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    & > div{
      margin: 3.5vh;
    }
  }
  & > a > img {
    height : 6vh;
  }
  
  & > div > a {
    text-decoration : none;
  }
`;

const Join = styled.a`
  font-size: 2.5vh;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #2A2C35;
  color: #2A2C35;
  border-radius: 20px;
  transition-duration: 167ms;
  font-size: 2.5vh;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: #ffd7d7;
  &:hover {
    background-color: #ffcccc;
    color: #000000  ;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 400px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: 5vh;
  margin-bottom: 0vh;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    text-align : left;
    font-size: 56px;
    color: #2A2C35;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 770px;
    height: 617px;
    position: absolute;
    top: 0vh;
    left: 94vh;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  & > a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Started = styled.button`
  display: flex;
  justify-content: center;
  background-color: #ffd7d7;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 26px;
  
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #ffafaf;
    color: rgba(0, 0, 0, 0.75);
  }
  & > img {
    padding : 1vh;
  } 
`;

const Text = styled.div`
  padding-top: 100px;
  text-align : left;
  width: 100vh;
  font-size : 3.5vh ;
`;
const Account = styled.div`
  padding-top: 2vh;
  padding-left: 10vh;
  text-align : left;
  width: 100vh;
  font-size : 2.3vh ;

  & > span > a{
    // text-decoration : none;
    font-weight : 600;
  }

`;


export default Login;
