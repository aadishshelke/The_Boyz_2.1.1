import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';

import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase-config'

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
    background-color: #fff; // Use a lighter background for the form itself
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
    width: 300px; // Adjust width as necessary
`;

const Textarea = styled.textarea`
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 300px; // Adjust width as necessary
    height: 100px;
`;

const Button = styled.button`
    background-color: #2196F3;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1976D2; // Darken button on hover
    }
`;

const Signin = () => {
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = formData;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Authentication successful
            console.log('User logged in:', userCredential.user);
            
            // Retrieve user document to get the role
            const userDocRef = doc(db, "users", userCredential.user.uid);
            getDoc(userDocRef).then((docSnap) => {
              if (docSnap.exists()) {
                const userData = docSnap.data();
                console.log(userData);
                if (userData.role === 'founder') {
                  navigate('/pgs');
                } else if (userData.role === 'investor') {
                  navigate('/pgm');
                } else {    
                  console.error("User role is not defined or unexpected");
                  navigate('/');
                }
              } else {
                console.error("No user document found");
                navigate('/');
              }
            });
          })
        .catch((error) => {
            let message;
            switch (error.code) {
                case 'auth/wrong-password':
                    message = 'The password is incorrect. Please try again.';
                    break;
                case 'auth/invalid-email':
                    message = 'No user registered with this email. Please sign up.';
                    break;
                case 'auth/too-many-requests':
                    message = "Access to this account has been temporarily disabled due to many failed login attempts.";
                    break;
                default:
                    message = 'Failed to sign in. Please try again.';
                    break
            }
            setError(message);
            console.error('Error during sign in:', error.message);
        });

        console.log('Founder Details:', formData);
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

    return (
        <Container>
            <Logo>
          <a href="/home">
            <img src="/images/logo-transparent.png" height = "1px" alt="" />
          </a>
        </Logo>
        <h1>Enter your email and password</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <Button type="submit" onClick={handleSubmit}>Log in</Button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </Form>
        </Container>
    );
};

export default Signin;