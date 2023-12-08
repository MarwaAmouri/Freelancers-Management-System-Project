import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({
  loginData, 
  onFillForm, 
  handleLogin, 
  error, 
  invalidData, 
  showPassword, 
  togglePasswordVisibility,
  clearInputErrors
}) => {
  return (
    <div className=" bg-stone
    border border-gray-dark rounded shadow-lg 
    mt-36 mb-6 mx-[15%] lg:mx-[35%] md:mx-[30%] sm:mx-[25%]
    px-[4%]">
      <div className="flex justify-center items-center 
      mt-16 mb-8">
        <a href="/">
          <p className='font-font1 text-4xl text-text-color'>WorkQuake</p>
        </a>
      </div>
      <div className="flex justify-center items-center
      mb-8">
        Welcome back
      </div>
      <div className="flex justify-center items-center
      mb-16">
        <form className="w-[100%]">
          <div className="w-full">  
            <input
              className={`w-[100%] 
              h-10 
              pl-4  
              border rounded
              ${error || invalidData ? 'border-red' : 'border-gray-dark'}`}
              type="text"
              name="username"
              placeholder="username"
              value={loginData.username}
              onChange={onFillForm}
              onClick={clearInputErrors}
            />
          </div>
          <div className="mt-4">
            <input
              className={`w-[100%] 
              h-10 
              pl-4  
              border rounded
              ${error || invalidData ? 'border-red' : 'border-gray-dark'}`}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={onFillForm}
              onClick={clearInputErrors}
            />
            <div className=' mr-3 flex justify-end -mt-8'>
              <div
              className="cursor-pointer"
              onClick={togglePasswordVisibility}
              >
                {showPassword ? '👁‍🗨' : '👁‍🗨'}
              </div>
            </div>
          </div>
          <div>
            {/* it will render the content on the right side of && only if the condition on the left side is truthy*/}
            {error || invalidData ? (
              <p className="text-red text-xs mt-6">
                {error || invalidData}
              </p>
            ) : null}
          </div>
          <div className="flex justify-center items-center 
          mt-12">
            <button 
              className="border border-gray-dark rounded
              w-[100%]
              px-8
              h-10
              bg-button-color text-white
              hover:bg-button-hover"
              type="button"
              onClick={handleLogin}>
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center">
        Don't have an account?
      </div>
      <div className="flex justify-center items-center
      mb-16 mt-4">
        <button 
        className="border border-gray-dark rounded
        px-2
        bg-button-color text-white
        hover:bg-button-hover">
          <Link to="/Signup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
