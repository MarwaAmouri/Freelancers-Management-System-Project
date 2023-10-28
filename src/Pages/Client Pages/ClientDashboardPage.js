import React from 'react'
import { Link } from 'react-router-dom';
import { useClientContext } from '../../Contexts/ClientContext';
import Logout from '../../Components/Logout';

export default function ClientDashboardPage() {

  const { state } = useClientContext();

  if (state.currentClientUser) {
    return (
      <div>
        <p>Client Info is available:</p>
        <p>Name: {state.currentClientUser.username}</p>
        <p>Email: {state.currentClientUser.email}</p>
        <p>Account Balance: {state.currentClientUser.balance}</p>
        <br></br>
        <div>
          <Link to ="/client/clientProfile">Go to Profile Page</Link>
        </div>
        <div>
          <Link to ="/client/payment">Go to Payment Page</Link>
        </div>
        <div>
          <Logout />
        </div>
      </div>

    );
  } else {
    return (
      <div>
        <p>No client info available.</p>
      </div>
    );
  }
}