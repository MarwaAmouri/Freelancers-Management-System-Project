import React, { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm';
import { useNavigate } from 'react-router-dom';
import { useContractorContext, actions } from '../../Contexts/ContractorContext';

export default function ContractorSignUpForm() {
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

  const { dispatch } = useContractorContext();
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
    const contractorUser = { ...formData, type: 'contractor' };
    const updatedUsers = [...registeredUsers, contractorUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRegisteredUsers(updatedUsers);
    
    alert('User signed up successfully!' + contractorUser.email);
    // console.log('User signed up successfully U are in Sign up page: ', contractorUser);
    dispatch({ type: actions.SIGN_UP, payload: { contractorUser } });
    navigate('Contractor/contractordashboard');
  };

  return (
    <div>
      <h2>Contractor Sign Up Form</h2>
      <SignUpForm
      formData={formData}
      handleChange={handleChange}
      handleSignUp={handleSignUp}
      />
    </div>
  );
}
