import React, { createContext, useReducer, useContext } from 'react';
import { localStorageGet, localStorageSet } from '../LocalStorage';

// Define initial state
const initialState = {
  user: null,
  userType: null,
  isAuthenticated: false,
};

// Define actions
const actions = {
  SIGN_UP: 'SIGN_UP',
};

// Reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      const { user, userType } = action.payload;
      localStorageSet('user', user);
      localStorageSet('userType', userType);
      return { ...state, user, userType, isAuthenticated: true };
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Create a context provider component
function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for using the context
function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}

export { UserContextProvider, useUserContext, actions };
