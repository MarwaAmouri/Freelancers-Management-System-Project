import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/logInForm';
import { useClientContext, actions as clientActions } from '../Contexts/ClientContext';
import { useContractorContext, actions as contractorActions } from '../Contexts/ContractorContext';
import HomeNav from '../Components/HomePage/HomeNav';

export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [invalidData, setInvalidData] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  
  const { dispatch: clientDispatch } = useClientContext();
  const { dispatch: contractorDispatch } = useContractorContext();

  const handleFillForm = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    if (!loginData.username || !loginData.password) {
      setInvalidData('Please fill out all required fields');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = storedUsers.find(
      (user) =>
        user.username === loginData.username && user.password === loginData.password
    );

    if (currentUser) {
      if (currentUser.type === 'client') {
        localStorage.removeItem('currentContractorUser'); 
        clientDispatch({ type: clientActions.LOG_IN, payload: { currentUser } });
        navigate('/client/dashboard');
      } else {
        localStorage.removeItem('currentClientUser');
        contractorDispatch({ type: contractorActions.LOG_IN, payload: { currentUser } });
        navigate('/contractor/dashboard');
      }
    } else {
      setError('Incorrect username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearInputErrors = () => {
    setInvalidData('');
    setError('');
  };

  return (
    <div className='bg-bg-color'>
      <HomeNav />
      <LoginForm
      loginData={loginData}
      onFillForm={handleFillForm} 
      handleLogin={handleLogin}
      error={error}
      invalidData={invalidData}
      showPassword={showPassword}
      togglePasswordVisibility={togglePasswordVisibility}
      clearInputErrors={clearInputErrors}
      />
    </div>
  )
}
