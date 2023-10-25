import React, { createContext, useReducer, useContext, useEffect } from 'react';

const ClientContext = createContext();

const initialClientState = {
    registeredClientUsers: [],
    currentClientUser: null,
    isAuthenticated: false,
    error: null,
  };

const actions = {
    LOG_IN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    LOGOUT: 'LOGOUT',
    UPDATE_BALANCE: 'UPDATE_BALANCE',
  };

 const clientReducer = (state, action) => {
    switch (action.type) {
      case actions.SIGN_UP:
        const { clientUser } = action.payload;
        // console.log('User signed up successfully, u are in clientcontext');
        return {
          ...state,
          registeredClientUsers: [...state.registeredClientUsers, clientUser], // Add the new user to the array
          currentClientUser: clientUser,
          isAuthenticated: true,
          error: null,
        };
        case actions.LOG_IN:
          const { currentUser } = action.payload;
          return {
            ...state,
            currentClientUser: currentUser,
            isAuthenticated: true,
            error: null 
          };
        case actions.LOGOUT:
          return { 
            ...state, 
            currentClientUser: null, 
            isAuthenticated: false, 
            error: null 
          };
        case actions.UPDATE_BALANCE:
          const { newBalance } = action.payload;
          const updatedUser = {
            ...state.currentClientUser,
            balance: newBalance
          };
          const updatedUsers = state.registeredClientUsers.map((user) => {
            if (user.email=== updatedUser.email) {
              return updatedUser;
            }
            return user;
          });
          localStorage.setItem('registeredClientUsers', JSON.stringify(updatedUsers));
          localStorage.setItem('users', JSON.stringify(updatedUsers));

          return {
            ...state,
            registeredClientUsers: updatedUsers,
            currentClientUser: updatedUser,
            error: null,
          };
      default:
        return state;
    }
  };

  function ClientContextProvider({ children }) {
    const [state, dispatch] = useReducer(clientReducer, initialClientState, () => {
      const storedRegisteredUsers = localStorage.getItem('registeredClientUsers');
      const parsedRegisteredUsers = storedRegisteredUsers ? JSON.parse(storedRegisteredUsers) : [];

      // Check if there is a stored currentClientUser
      const storedCurrentUser = localStorage.getItem('currentClientUser');
      const parsedCurrentUser = storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
  
      return parsedRegisteredUsers && Array.isArray(parsedRegisteredUsers)
        ? { 
          registeredClientUsers: parsedRegisteredUsers, 
          currentClientUser: parsedCurrentUser, 
          isAuthenticated: true, 
          error: null 
        }
        : initialClientState;
    });

    useEffect(() => {
      const storedRegisteredUsers = localStorage.getItem('users');
      const parsedRegisteredUsers = storedRegisteredUsers ? JSON.parse(storedRegisteredUsers) : [];
    
      if (Array.isArray(parsedRegisteredUsers) && state.registeredClientUsers.length > 0) {
        localStorage.setItem('registeredClientUsers', JSON.stringify(state.registeredClientUsers));
      } else {
        if (parsedRegisteredUsers === null) {
          localStorage.removeItem('registeredClientUsers'); // Remove the data if it's null
        }
      }

      // Update local storage with the currentClientUser
      if (state.currentClientUser) {
        localStorage.setItem('currentClientUser', JSON.stringify(state.currentClientUser));
      } else {
        localStorage.removeItem('currentClientUser'); // Remove the data if it's null
      }
    }, [state.registeredClientUsers, state.currentClientUser]);
    
    return (
      <ClientContext.Provider value={{ state, dispatch }}>
        {children}
      </ClientContext.Provider>
    );
  }

  function useClientContext() {
    const context = useContext(ClientContext);
    if (!context) {
      throw new Error('useClientContext must be used within a ClientContextProvider');
    }
    return context;
  }
  
  export { ClientContextProvider, useClientContext, actions };
  export default ClientContextProvider;
