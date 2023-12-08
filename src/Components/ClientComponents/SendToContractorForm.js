import React from 'react'
import card1 from '../../assets/credit-card (1).png'
import card2 from '../../assets/card.png'
import { useClientContext } from '../../Contexts/ClientContext';

export default function SendToContractorForm({transaction, handleChange, handleSendMoney}) {
  const { state } = useClientContext();

  const isDisabled = transaction.recipient.trim() === '' || transaction.amount.trim() === '';

  return (
    <div className=''>
      <div className=" bg-stone
      border border-gray-dark rounded shadow-lg 
      mt-16 mb-8 
      px-[7%]">
        <div className='flex justify-center items-center gap-4 mt-6'>
          <img src={card1} alt="" className="w-10 h-10" /> 
          <p className='font-title1 text-xl text-text-color pt-1'>Payment Information</p>
          </div>
        <div className="flex justify-center items-center
        mb-16 mt-16">
          <form className="w-[100%]">
            <div className="w-full">
              <div className='mb-8'>
                <span className='lg:text-lg md:text-md text-text-color'>This payment is associated with the client's email:</span>
                <span className='lg:text-lg md:text-md text-gray font'> {state.currentClientUser.email}</span>
              </div>
              <div className="mt-4 lg:flex md:mx-4">
                  <div className="flex w-[80%] lg:text-lg md:text-md pb-2 text-text-color">
                    Enter the contractor email:
                  </div>
                  <input
                    className="lg:w-[100%] w-[80%]
                    h-10 
                    pl-6
                    border rounded border-gray-dark"
                    type="email"
                    name="recipient"
                    value={transaction.recipient}
                    onChange={handleChange}
                  />
              </div>
              <div className="mt-4 lg:flex items-baseline md:mx-4">
                <div className="flex w-[80%] lg:text-lg md:text-md pb-2 text-text-color">
                  Transaction amount:
                </div>
                <input
                  className="lg:w-[100%] w-[80%] 
                  h-10 
                  pl-6
                  border rounded border-gray-dark"
                  type="number"
                  name="amount"
                  value={transaction.amount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button 
              className={`flex justify-center items-center 
              shadow-md rounded-sm
              px-12 py-3 
              mt-16 
              text-white text-lg
              ${isDisabled ? 'bg-text-color' : 'bg-button-hover'}`}
              type="button" 
              onClick={handleSendMoney}
              disabled={isDisabled}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
