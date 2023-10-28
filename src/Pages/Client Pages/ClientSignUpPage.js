import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SignUpForm from '../../Components/SignUpForm';
import { useNavigate } from 'react-router-dom';
import { useClientContext, actions } from '../../Contexts/ClientContext';

export default function ClientSignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    // Retrieve registered users from local storage or initialize as an empty array
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];  //|| [] is used to provide a default value in case the data retrieved from localStorage is null or undefined
    return storedUsers;
  });

  const { dispatch } = useClientContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    // Check if any required fields are empty
    if (!formData.username || !formData.email || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }

    // Check if the user with the same email is already registered
    const isUserAlreadyRegistered = registeredUsers.some((user) => user.email === formData.email);
    if (isUserAlreadyRegistered) {
      alert('A user with this email is already registered.');
      return;
    }

    // If all checks pass, set the "type" to "client" and save the user data to local storage and registeredUsers state
    const userId = uuidv4();
    const clientUser = { ...formData, type: 'client', balance: parseFloat(100), id: userId };
    const updatedUsers = [...registeredUsers, clientUser];
    // console.log(typeof clientUser.balance); 

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRegisteredUsers(updatedUsers);
    
    // alert('User signed up successfully!' + clientUser.email);
    //console.log('User signed up successfully:', registeredUsers);
    dispatch({ type: actions.SIGN_UP, payload: { clientUser } });
    navigate('/client/clientdashboard');
  };

  return (
    <div>
      <h2>Client Sign Up Form</h2>
      <SignUpForm
      formData={formData}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
      />
    </div>
  );
}
