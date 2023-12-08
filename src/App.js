import React from 'react';
import './App.css';
import AppRouter from './Routes/AppRouter';
import ClientContextProvider from './Contexts/ClientContext';
import ContractorContextProvider from './Contexts/ContractorContext';

function App() {
  // localStorage.clear();
  return (
    <div>
      <ClientContextProvider>
        <ContractorContextProvider>
          <AppRouter />
        </ContractorContextProvider>
      </ClientContextProvider>
    </div>
  );
}

export default App;
