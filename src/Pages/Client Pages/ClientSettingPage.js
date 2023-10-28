import React, { useState } from 'react'
import { useClientContext, actions } from '../../Contexts/ClientContext';
import ClientSelfTransfer from '../../Components/ClientSelfTransfer';
import { Link } from 'react-router-dom';

export default function ClientSettingPage() {

  const { state, dispatch } = useClientContext();

  const currentUserBalance = state.currentClientUser.balance;
  const [newBalance, setNewBalance] = useState({ balance: currentUserBalance });

    const handleBalanceChange = (e) => {
      const { name, value } = e.target;
      setNewBalance({ ...newBalance, [name]: value });
    };

    const handleConfirm = () => {
      // Check if the new value is valid 
      const newValue = parseFloat(newBalance.balance);
      console.log(typeof newValue );
      if (!isNaN(newBalance.balance) && newBalance.balance !== '' && parseFloat(newBalance.balance) !== 0) {
        dispatch({ type: actions.UPDATE_BALANCE, payload: { newBalance: newValue } });
      } else {
        console.log('Invalid value');
      }
    };

  return (
    <div>
      <p>Account Balance: {state.currentClientUser.balance}</p>
      <div>
        <ClientSelfTransfer 
        newBalance={newBalance}
        handleBalanceChange={handleBalanceChange}
        handleConfirm={handleConfirm}
        />
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Link to ="/client/clientProfile">Back</Link>
    </div>
  )
}