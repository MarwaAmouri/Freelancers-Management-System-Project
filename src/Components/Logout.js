import React from 'react'
import { useContractorContext, actions } from '../Contexts/ContractorContext';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { dispatch } = useContractorContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        // dispatch({ type: actions.Logout});
        navigate('/');
      };

  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
