import React, { useState } from 'react';

const LoginForm = ({loginData, onFillForm, handleLogin}) => {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="username"
            placeholder="userName"
            value={loginData.username}
            onChange={onFillForm}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={onFillForm}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
