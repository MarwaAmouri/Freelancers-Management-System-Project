import React from 'react'
import { useClientContext, actions as clientActions } from '../Contexts/ClientContext';
import { useContractorContext, actions as contractorActions } from '../Contexts/ContractorContext';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

export default function Logout() {
  const { dispatch: clientDispatch } = useClientContext();
  const { dispatch: contractorDispatch } = useContractorContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    clientDispatch({ type: clientActions.LOGOUT });
    contractorDispatch({ type: contractorActions.LOGOUT });
    navigate('/');
  };

  return (
    <div>
        <button 
        onClick={handleLogout}>
          Logout
        </button>
    </div>
  )
}
