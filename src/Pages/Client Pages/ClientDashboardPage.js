import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { useClientContext } from '../../Contexts/ClientContext';
import Logout from '../../Components/Logout';

export default function ClientDashboardPage() {

  const { state } = useClientContext();

  if (state.clientInfo) {
    return (
      <div>
        <p>Client Info is available:</p>
        <p>Name: {state.clientInfo.username}</p>
        <p>Email: {state.clientInfo.email}</p>
        <br></br><Link to ="/Client/Clientdashboard/Profile">Go to Progile Page</Link>
        <div>
          <Logout />
        </div>
      </div>

    );
  } else {
    return (
      <div>
        <p>No client info available.</p>
        <br></br>
        <div>
          <Logout />
        </div>
      </div>
    );
  }
}