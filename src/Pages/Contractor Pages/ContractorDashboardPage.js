import React from 'react'
import { useContractorContext } from '../../Contexts/ContractorContext'
import Logout from '../../Components/Logout';
import { Link } from 'react-router-dom';

export default function ContractorDashboard() {

  const { state } = useContractorContext();

  if (state.currentContractorUser) {
    return (
      <div>
        <p>Contractor Info is available:</p>
        <p>Name: {state.currentContractorUser.username}</p>
        <p>Email: {state.currentContractorUser.email}</p>
        <p>Account Balance: {state.currentContractorUser.balance}</p>
        <br></br>
        <Link to ="/contractor/contractorProfile">Go to Progile Page</Link>
        <div>
          <Logout />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No contactor info available.</p>
      </div>
    );
  }
}
