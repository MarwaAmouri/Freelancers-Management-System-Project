import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SignUpForm from '../../Components/SignUpForm';
import { useNavigate } from 'react-router-dom';
import { useClientContext, actions } from '../../Contexts/ClientContext';
import HomeNav from '../../Components/HomePage/HomeNav';

export default function ClientSignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName:'',
    lastName:'',
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    // Retrieve registered users from local storage or initialize as an empty array
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];  //|| [] is used to provide a default value in case the data retrieved from localStorage is null or undefined
    return storedUsers;
  });

  const [registeredClientUsers, setRegisteredClientUsers] = useState(() => {
    // Retrieve registered users from client local storage or initialize as an empty array
    const storedClientUsers = JSON.parse(localStorage.getItem('registeredClientUsers')) || [];  //|| [] is used to provide a default value in case the data retrieved from localStorage is null or undefined
    return storedClientUsers;
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailExistsError, setEmailExistsError] = useState('');
  const [invalidData, setInvalidData] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { dispatch } = useClientContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Check if any required fields are empty
    if (!formData.username || !formData.email || !formData.password || !formData.firstName || !formData.lastName || !confirmPassword) {
      setInvalidData('Please fill out all required fields');
      return;
    }

    // Check if the user with the same username is already registered
    const isUserAlreadyRegistered = registeredUsers.some((user) => user.username === formData.username);
    if (isUserAlreadyRegistered) {
      setUsernameError('A user with this username is already registered');
      return;
    }

    const validateEmail = (email) => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return isValid;
    };

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Check if the user with the same email is already registered
    const isUserAlreadyEmailRegistered = registeredClientUsers.some((user) => user.email === formData.email);
    if (isUserAlreadyEmailRegistered) {
      setEmailExistsError('A user with this email is already registered');
      return;
    }

    const validateUsername = (username) => {
      const isValid = /^[a-z]{5,12}$/.test(username);
      return isValid;
    };

    if (!validateUsername(formData.username)) {
      setUsernameError('Username must be 5 to 12 characters and contain only lowercase letters.');
      return;
    }

    const validatePassword = (password) => {
      const isValid = /^(?=.*[a-zA-Z])(?=.*[0-6])[a-zA-Z0-9_]{6,}$/.test(password);
      return isValid;
    };

    if (!validatePassword(formData.password)) {
      setPasswordError('Password must be 6 digits and contain both letters and numbers');
      return;
    }

    if (formData.password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
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
    navigate('/client/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const clearInputErrors = () => {
    setInvalidData('');
    setEmailError('');
    setUsernameError('');
    setPasswordError('');
    setEmailExistsError('');
    setConfirmPasswordError('');
  };

  return (
    <div className='bg-bg-color'>
      <HomeNav />
      <div className="justify-center items-center text-center">
        <div>
          <h2>Sign Up as Client</h2>
        </div>
        <div>
          <SignUpForm
          formData={formData}
          handleChange={handleChange}
          handleSignUp={handleSignUp}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          showConfirmPassword={showConfirmPassword}
          toggleConfirmPasswordVisibility={toggleConfirmPasswordVisibility}
          emailError={emailError}
          emailExistsError={emailExistsError}
          invalidData={invalidData}
          usernameError={usernameError}
          passwordError={passwordError}
          clearInputErrors={clearInputErrors}
          confirmPassword={confirmPassword}
          confirmPasswordError={confirmPasswordError}
          />
        </div>
      </div>
    </div>
  );
}
