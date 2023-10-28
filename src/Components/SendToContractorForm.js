import React from 'react'

export default function SendToContractorForm({transaction, handleChange, handleSendMoney}) {
  return (
    <div>
      Send Money To Contractor Form:
      <br></br>
      <br></br>
      <form>
        <div>
          <div>
            <label>
              Enter the contractor email:
              <input
                type="email"
                name="recipient"
                value={transaction.recipient}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
                Enter the transaction amount:
                <input
                  type="number"
                  name="amount"
                  value={transaction.amount}
                  onChange={handleChange}
                />
            </label>
          </div>
        </div>
        <div>
          <button type="button" onClick={handleSendMoney}>
            Send
          </button>
        </div>
      </form>
    </div>

  )
}
