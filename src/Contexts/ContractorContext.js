import React, { createContext, useReducer, useContext, useEffect } from 'react';

const ContractorContext = createContext();

const initialContractorState = {
    registeredContractorUsers: [],
    currentContractorUser: null,
    recipientUser: null,
    transactionHistory: [],
    recipientIds: [],
    isAuthenticated: false,
    error: null,
  };

const actions = {
    LOG_IN: 'LOGIN',
    SIGN_UP: 'SIGN_UP',
    LOGOUT: 'LOGOUT',
    UPDATE_BALANCE: 'UPDATE_BALANCE',
    DISABLE_RECEIVED_MONEY_MESSAGE: 'DISABLE_RECEIVED_MONEY_MESSAGE',
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
        return { 
          ...state, currentContractorUser: null, 
          isAuthenticated: false, 
          error: null 
        };
      case actions.UPDATE_BALANCE:
        const { recipientContractor, transactionAmount, sender, updateBalance } = action.payload;
        // console.log(updateBalance);
        state.recipientUser = recipientContractor;
        state.recipientUser.balance = updateBalance;
        // console.log(" id :" + sender.id);

        const transactionEntry = {
          recipientId: state.recipientUser.id,
          recipientName: state.recipientUser.firstName + ' ' + state.recipientUser.lastName,
          senderId: sender.id,
          senderName: sender.firstName + ' ' + sender.lastName,
          amount: transactionAmount,
          timestamp: new Date().toISOString(),
        };
  
        // Update the transaction history
        const updatedTransactionHistory = [...state.transactionHistory, transactionEntry];
        const updatedRecipientIds = [...state.recipientIds, state.recipientUser.id];


        // If the id matches, it returns a new object referred to as recipientContractor.
        // This suggests that it's replacing the user with a different object (recipientContractor)
        // in the resulting array when the id matches.
        const updatedContractorUsers= state.registeredContractorUsers.map((user) => {
          if (user.id === state.recipientUser.id) {
            return recipientContractor;
          }
          return user;
        });

        const storedUsers = JSON.parse(localStorage.getItem('users'));
        const updatedUsers= storedUsers.map((user) => {
          if (user.id === state.recipientUser.id) {
            return recipientContractor;
          }
          return user;
        });

        // localStorage.setItem('registeredContractorUsers', JSON.stringify(updatedContractorUsers));
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        return {
          ...state,
          registeredContractorUsers: updatedContractorUsers,
          transactionHistory: updatedTransactionHistory,
          recipientIds: updatedRecipientIds,
          error: null,
        };
      case actions.DISABLE_RECEIVED_MONEY_MESSAGE:
        const { newRecipientIds } = action.payload;
        return {
          ...state,
          recipientIds: newRecipientIds,
        };
        
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

      const storedRecipientIds = localStorage.getItem('recipientIds');
      const parsedRecipientIds = storedRecipientIds ? JSON.parse(storedRecipientIds) : [];

      // Load transaction history from local storage
      const storedTransactionHistory = localStorage.getItem('transactionHistory');
      const parsedTransactionHistory = storedTransactionHistory ? JSON.parse(storedTransactionHistory) : [];
  
      return parsedRegisteredUsers && Array.isArray(parsedRegisteredUsers)
        ? { 
          registeredContractorUsers: parsedRegisteredUsers,
          currentContractorUser: parsedCurrentUser,
          transactionHistory: parsedTransactionHistory,
          recipientIds: parsedRecipientIds, // Initialize as an empty array
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

      if (state.recipientIds) {
        localStorage.setItem('recipientIds', JSON.stringify(state.recipientIds));
      } else {
        localStorage.removeItem('recipientIds'); // Remove the data if it's null
      }

      localStorage.setItem('transactionHistory', JSON.stringify(state.transactionHistory));
    }, [state.registeredContractorUsers, state.currentContractorUser, state.transactionHistory, state.recipientIds]);
  
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