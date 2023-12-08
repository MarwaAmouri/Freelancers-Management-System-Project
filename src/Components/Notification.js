import React from 'react'
import { useContractorContext, actions } from '../Contexts/ContractorContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function Notification() {
    const { state, dispatch } = useContractorContext();
    const navigate = useNavigate();

    if (state.currentContractorUser.id && state.recipientIds && Array.isArray(state.recipientIds)) {
        if(state.recipientIds.includes(state.currentContractorUser.id)) {
            Swal.fire({
                title: 'You received a payment',
                text: 'You have received money. Please check your balance and transaction history.',
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'Check',
                cancelButtonText: 'Dismiss',
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/contractor/history');
                }
              });

                const newRecipientIds = state.recipientIds.filter(
                    userId => userId !== state.currentContractorUser.id
                );

                dispatch({ type: actions.DISABLE_RECEIVED_MONEY_MESSAGE, payload: { newRecipientIds } });
            } else {
                return null;
            }
    } else {
        return null; 
    }
}






