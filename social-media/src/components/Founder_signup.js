import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffbead',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#ffdbd2',
},
textarea: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
    backgroundColor: '#ffdbd2', 
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  }
};

const StartupForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    description: "",
    mission: "",
    offerings: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Further processing here
  };

  const Container = styled.div `
    border = 2px solid red;
    display : flex;
    text-align : center ;
    background-color: #ffdbd2;
    height : 100vh;
    align-items : center ;
    flex-direction : column ; 

    & > form {
        height : 60%;
        width : 50vh;
    }

    & > h1 {
        font-size : 8vh;
    }
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  margin-right : 1vh;
  & > a > img {
    height : 4vh;
    padding-left : 2vh;
    padding-bottom : 5vh;
    padding-top : 1vh;
  }
`;

let navigate = useNavigate();
return (
  <Container>
      <Logo>
        <a href="/home">
          <img src="/images/logo-transparent.png" height="1px" alt="" />
        </a>
      </Logo>
      <h1>Register Your Startup</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName} // Bind input value to formData state
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} // Bind input value to formData state
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Bind input value to formData state
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description} // Bind textarea value to formData state
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <input
          type="text"
          name="mission"
          placeholder="Mission Statement"
          value={formData.mission} // Bind input value to formData state
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="offerings"
          placeholder="Offerings"
          value={formData.offerings} // Bind input value to formData state
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
  </Container>
);
};


export default StartupForm;