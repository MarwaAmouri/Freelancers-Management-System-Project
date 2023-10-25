import React from 'react'
import { Link } from 'react-router-dom';
import { useClientContext } from '../../Contexts/ClientContext';

export default function ClientProfilePage() {

  const { state } = useClientContext();

  return (
    <div>
    <h1>Client Profile</h1>
    <p>Name: {state.currentClientUser.username}</p>
    <p>Email: {state.currentClientUser.email}</p>
    <p>Account Balance: {state.currentClientUser.balance}</p>
    <Link to ="/client/clientProfile/setting">Go to setting Page</Link>
  </div>
  )
}
