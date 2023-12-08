import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = ({
  formData, 
  handleChange, 
  handleSignUp, 
  handleConfirmPasswordChange,
  showPassword, 
  showConfirmPassword, 
  togglePasswordVisibility, 
  toggleConfirmPasswordVisibility, 
  emailError, 
  emailExistsError,
  invalidData, 
  usernameError,
  passwordError,
  clearInputErrors,
  confirmPassword,
  confirmPasswordError,
}) => {

  return (
    <div className=" bg-stone
    border border-gray-dark rounded shadow-lg 
    mt-28 mb-8 mx-[15%] lg:mx-[35%] md:mx-[30%] sm:mx-[25%]
    px-[4%]">
      <div className="flex justify-center items-center 
      mt-16 mb-8">
        <a href="/">
          <p className='font-font1 text-4xl text-text-color'>WorkQuake</p>
        </a>
      </div>
      <div className="flex justify-center items-center
      mb-12">
        <form className="w-[100%]">
          <div className="flex grid-cols-2  gap-1">
            <div>
              <input
                className="w-[100%] 
                h-10 
                pl-4  
                border rounded border-gray-dark"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                onClick={clearInputErrors}
              />
            </div>
            <div>
              <input
                className="w-[100%] 
                h-10 
                pl-4  
                border rounded border-gray-dark"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                onClick={clearInputErrors}
              />
            </div>
          </div>
          <div className="mt-2">
            <input
              className="w-[100%] 
              h-10 
              pl-4  
              border rounded border-gray-dark"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              onClick={clearInputErrors}
            />
            <div className="flex justify-start">
              {usernameError && <p className="text-red text-xs mt-1">{usernameError}</p>}
            </div>
          </div>
          <div className="mt-2">
            <input
              className="w-[100%] 
              h-10 
              pl-4  
              border rounded border-gray-dark"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onClick={clearInputErrors}
            />
            <div className="flex justify-start">
              {emailError && <p className="text-red text-xs mt-1">{emailError}</p>}
            </div>
            <div className="flex justify-start">
              {emailExistsError && <p className="text-red text-xs mt-1">{emailExistsError}</p>}
            </div>
          </div>
          <div className="mt-2">
            <input
              className="w-[100%] 
              h-10 
              pl-4  
              border rounded border-gray-dark"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              onClick={clearInputErrors}
            />
            <div className='-mt-9 mr-3 flex justify-end'>
              <div
              className="cursor-pointer"
              onClick={togglePasswordVisibility}
              >
                {showPassword ? '👁‍🗨' : '👁‍🗨'}
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            {passwordError && <p className="text-red text-xs mt-1">{passwordError}</p>}
          </div>
          <div className="mt-2">
            <input
              className="w-[100%] 
              h-10 
              pl-4  
              border rounded border-gray-dark"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onClick={clearInputErrors}
            />
            <div className='-mt-9 mr-3 flex justify-end'>
              <div
              className="cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? '👁‍🗨' : '👁‍🗨'}
              </div>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            {invalidData && <p className="text-red text-xs mt-1">{invalidData}</p>}
          </div>
          <div className="flex justify-start mt-4">
            {confirmPasswordError && <p className="text-red text-xs mt-1">{confirmPasswordError}</p>}
          </div>
          <div className="flex justify-center items-center 
          mt-4">
            <button 
              className="border border-gray-dark rounded
              w-[100%]
              px-8
              h-10
              bg-button-color text-white
              hover:bg-button-hover"
              type="button" 
              onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center text-sm">
        Already have an account?
      </div>
      <div className="flex justify-center items-center
      mb-6 mt-4">
        <button 
        className="border border-gray-dark rounded
        px-2
        bg-button-color text-white
        hover:bg-button-hover">
          <Link to ="/Login">Log in</Link>
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
