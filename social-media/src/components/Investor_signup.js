import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    background-color: #ffeae5; // Consistent background color
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Button = styled.button`
    background-color: #ffd7d7;
    color: rgba(0, 0, 0, 0.6);
    padding: 20px 40px;
    border: none;
    border-radius: 8px;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
        background-color: #ffafaf;
        color: rgba(0, 0, 0, 0.75);
    }

    &:first-child {
        margin-right: 20px;
    }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  margin-right : 1vh;
  & > a > img {
    height : 6vh;
    padding-left : 2vh;
    padding-bottom : 18vh;
    padding-top : 1vh;
  }
`;

const RoleSelection = () => {
    let navigate = useNavigate();

    return (
        <Container>
            <Logo>
          <a href="/home">
            <img src="/images/logo-transparent.png" height = "1px" alt="" />
          </a>
        </Logo>
            <Button onClick={() => navigate('/signup-founder')}>
                I'm a startup founder, looking to get some investors.
            </Button>
            <Button onClick={() => navigate('/signup-investor')}>
                I'm an investor, looking to connect with startups.
            </Button>
        </Container>
    );
};

export default RoleSelection;
