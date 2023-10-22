import React from 'react'
import { useContractorContext } from '../../Contexts/ContractorContext'
import Logout from '../../Components/Logout';
export default function ContractorDashboard() {

  const { state } = useContractorContext();

  if (state.ContractorInfo) {
    return (
      <div>
        <p>Contractor Info is available:</p>
        <p>Name: {state.ContractorInfo.username}</p>
        <p>Email: {state.ContractorInfo.email}</p>
        <br></br>
        <div>
          <Logout />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No contactor info available.</p>
        <br></br>
        <div>
          <Logout />
        </div>
      </div>
    );
  }
}
