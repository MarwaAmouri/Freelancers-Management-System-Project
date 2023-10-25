import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/logInForm';
import { useClientContext, actions as clientActions } from '../Contexts/ClientContext';
import { useContractorContext, actions as contractorActions } from '../Contexts/ContractorContext';

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const { dispatch: clientDispatch } = useClientContext();
  const { dispatch: contractorDispatch } = useContractorContext();

  const handleFillForm = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = storedUsers.find(
      (user) =>
        user.username === loginData.username && user.password === loginData.password
    );

    if (currentUser) {
      console.log('Logged in successfully!', currentUser.type);
      alert('Logged in successfully! ' + currentUser.type);

      if (currentUser.type === 'client') {
        clientDispatch({ type: clientActions.LOG_IN, payload: { currentUser } });
        navigate('/client/clientdashboard');
      } else {
        contractorDispatch({ type: contractorActions.LOG_IN, payload: { currentUser } });
        navigate('/Contractor/contractordashboard');
      }
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm
      loginData={loginData}
      onFillForm={handleFillForm} 
      handleLogin={handleLogin}
      />
    </div>
  )
}
