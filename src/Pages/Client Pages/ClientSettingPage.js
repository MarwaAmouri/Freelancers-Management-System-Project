import React, { useState } from 'react'
import { useClientContext, actions } from '../../Contexts/ClientContext';
import ClientSelfTransfer from '../../Components/ClientSelfTransfer';
import { Link } from 'react-router-dom';

export default function ClientSettingPage() {

  const { state, dispatch } = useClientContext();

  const currentUserBalance = state.currentClientUser.balance;
  const [newBalance, setNewBalance] = useState({ balance: currentUserBalance });

    const handleBalanceChange = (newValue) => {
      setNewBalance({ ...newBalance, balance: newValue });
      console.log('Updated Balance:', newBalance);
      dispatch({ type: actions.UPDATE_BALANCE, payload: { newBalance: newValue } });
      
    };

  return (
    <div>
      <p>Account Balance: {state.currentClientUser.balance}</p>
      <div>
        <ClientSelfTransfer 
        newBalance={newBalance}
        handleBalanceChange={handleBalanceChange}
        />
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Link to ="/client/clientProfile">Go to Progile Page</Link>
    </div>
  )
}