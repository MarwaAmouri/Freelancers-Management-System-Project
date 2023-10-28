import React from 'react'

export default function ClientSelfTransfer({newBalance, handleBalanceChange, handleConfirm}) {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="clientSelfTransfer">
                    Edit the client's balance
                    <input
                        type="number"
                        name="balance"
                        value={newBalance.balance}
                        onChange={handleBalanceChange}
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
