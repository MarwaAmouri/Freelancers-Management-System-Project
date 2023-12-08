import React from 'react';
import { useClientContext, actions } from '../../Contexts/ClientContext';
import Swal from 'sweetalert2';

export default function ClientSelfTransfer() {
  const { state, dispatch } = useClientContext();

  const oldValueBalance = parseFloat(state.currentClientUser.balance);

  const alert = async () => {
    const { value: inputValue } = await Swal.fire({
      title: 'Enter an amount to add to your balance',
      input: 'number',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value || value < 0) {
          return 'You need to enter a valid amount!';
        }
      },
    });

    if (inputValue) {
      const newValue = oldValueBalance + parseFloat(inputValue);
      Swal.fire(`Your new balance is ${newValue}`);
      dispatch({ type: actions.UPDATE_BALANCE, payload: { newBalance: newValue } });
    }
  };

  return (
    <div>
      <div>
        <button
          className="flex justify-center items-center
         text-white text-md font-title1
          shadow-lg
          rounded-sm
          px-4 py-3"
          onClick={alert}>
          Add funds
        </button>
      </div>
    </div>
  );
}
