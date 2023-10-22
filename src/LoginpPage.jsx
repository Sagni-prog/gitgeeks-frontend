import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Navigate } from "react-router-dom";


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData = {'email': email, 'password': password}
    sendLogin(loginData);
    console.log('Logging in with:', email, password);
  };

  const sendLogin = async(loginData) => {
      const data = await axios.post('http://localhost:8000/api/login',loginData,{
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
         }
      });

      console.log(data)
      if(data.data.status === 'success'){
         localStorage.setItem('user',JSON.stringify(data.data.data));
         localStorage.setItem('token',data.data.token);
         <Navigate to="/chat" replace={true} />
      }
  }

  

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

export default LoginPage;
