import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #ffeae5; // Keep background consistent
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    & > h1 {
        font-size : 7vh;
        padding-bottom : 5vh;
    }
`;

const Form = styled.form`
    background-color: #ffafaf; // Use a lighter background for the form itself
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px; // Spacing between form elements
`;

const Input = styled.input`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px; 
    background-color : #ffd7d7;
`;

const Textarea = styled.textarea`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px; // Adjust width as necessary
    height: 100px;
    background-color : #ffd7d7;
`;

const Button = styled.button`
    background-color: #ffd7d7;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ffafaf;
    }
`;

const FounderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        startupIdea: '',
        sector: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Founder Details:', formData);
        // Submission logic here
    };

    const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
    margin-right : 1vh;
    & > a > img {
      height : 4vh;
      padding-left : 2vh;
      padding-bottom : 10vh;

    }
  `;
    let navigate = useNavigate();
    return (
        <Container>
            <Logo>
          <a href="/home">
            <img src="/images/logo-transparent.png" height = "1px" alt="" />
          </a>
        </Logo>
        <h1>Register Your Startup</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="startupIdea"
                    placeholder="Startup Idea"
                    onChange={handleChange}
                ></Textarea>
                <Button type="submit" onClick={() => navigate('/home')}>Register as Founder</Button>
            </Form>
        </Container>
    );
};

export default FounderForm;
