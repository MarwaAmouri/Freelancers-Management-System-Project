import React, { createContext, useReducer, useContext, useEffect } from 'react';

const ContractorContext = createContext();

const initialContractorState = {
    registeredContractorUsers: [],
    currentContractorUser: null,
    isAuthenticated: false,
    error: null,
  };

const actions = {
    LOG_IN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    LOGOUT: 'LOGOUT',
  };

 const ContractorReducer = (state, action) => {
    switch (action.type) {
      case actions.SIGN_UP:
        const { contractorUser } = action.payload;
        // console.log('You are in contractor context file the current user: ' + contractorUser.email);
        return {
          ...state,
          registeredContractorUsers: [...state.registeredContractorUsers, contractorUser], // Add the new user to the array
          currentContractorUser: contractorUser,
          isAuthenticated: true,
          error: null,
        };
        case actions.LOG_IN:
          const { currentUser } = action.payload;
          return { 
          ...state, 
          currentContractorUser: currentUser,
          isAuthenticated: true, 
          error: null 
        };
        case actions.LOGOUT:
          return { ...state, currentContractorUser: null, isAuthenticated: false, error: null };
      default:
        return state;
    }
  };

  function ContractorContextProvider({ children }) {
    const [state, dispatch] = useReducer(ContractorReducer, initialContractorState, () => {
      const storedRegisteredUsers = localStorage.getItem('registeredContractorUsers');
      const parsedRegisteredUsers = storedRegisteredUsers ? JSON.parse(storedRegisteredUsers) : [];

      // Check if there is a stored currentContractorUser
      const storedCurrentUser = localStorage.getItem('currentContractorUser');
      const parsedCurrentUser = storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
  
      return parsedRegisteredUsers && Array.isArray(parsedRegisteredUsers)
        ? { 
          registeredContractorUsers: parsedRegisteredUsers,
          currentContractorUser: parsedCurrentUser,
          isAuthenticated: true, 
          error: null 
        }
        : initialContractorState;
    });

    useEffect(() => {
      const storedRegisteredUsers = localStorage.getItem('users');
      const parsedRegisteredUsers = storedRegisteredUsers ? JSON.parse(storedRegisteredUsers) : [];

      if (Array.isArray(parsedRegisteredUsers) && state.registeredContractorUsers.length > 0) {
        localStorage.setItem('registeredContractorUsers', JSON.stringify(state.registeredContractorUsers));
      } else {
        if (parsedRegisteredUsers === null) {
          localStorage.removeItem('registeredContractorUsers'); // Remove the data if it's null
        }
      }
      
      // Update local storage with the currentContractorUser
      if (state.currentContractorUser) {
        localStorage.setItem('currentContractorUser', JSON.stringify(state.currentContractorUser));
      } else {
        localStorage.removeItem('currentContractorUser'); // Remove the data if it's null
      }
    }, [state.registeredContractorUsers, state.currentContractorUser]);
  
    return (
      <ContractorContext.Provider value={{ state, dispatch }}>
        {children}
      </ContractorContext.Provider>
    );
  }

  function useContractorContext() {
    const context = useContext(ContractorContext);
    if (!context) {
      throw new Error('useContractorContext must be used within a ContractorContextProvider');
    }
    return context;
  }
  
  export { ContractorContextProvider, useContractorContext, actions };
  export default ContractorContextProvider;