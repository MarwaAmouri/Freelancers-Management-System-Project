import React from 'react'

export default function ClientSelfTransfer({newBalance, handleBalanceChange}) {
    const handleChange = (event) => {
        handleBalanceChange(event.target.value); // Pass the new value to the parent component
    };

    const handleConfirm = () => {
        // Check if the new value is valid 
        if (!isNaN(newBalance.balance) && newBalance.balance !== '' && parseFloat(newBalance.balance) !== 0) {
          handleBalanceChange(newBalance.balance);
        } else {
          // display an error message or action
          console.log('Invalid value');
        }
      };

  return (
    <div>
        <form>
            <div>
                <label htmlFor="clientSelfTransfer">
                    Edit the client's balance
                    <input
                        type="number"
                        id="clientSelfTransfer"
                        value={newBalance.balance}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <button type="button" onClick={handleConfirm}>
                    confirm
                </button>
            </div>
      </form>
    </div>
  )
}
