import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContractorContext } from '../../Contexts/ContractorContext'
import ContractorNav from '../../Components/ContractorNav'
import History from '../../Components/History';
import installment from '../../assets/installment.png'

export default function ContractorHistoryPage() {

  const { state } = useContractorContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.currentContractorUser) {
      navigate('/Login');
    }
  }, [state.currentClientUser]);

  if (state.currentContractorUser) {
    return (
      <div>
        <ContractorNav />
        <div className="flex justify-between items-center 
        border-t border-b border-gray shadow-xl
        h-40
        lg:mt-24 md:mt-20 sm:mt-18 mt-16
      bg-text-color">
          <div className="text-white font-title1
          lg:text-2xl md:text-lg sm:text-md text-md
          lg:ml-36 md:ml-24 sm:ml-18 ml-12">
            Transaction History
          </div>
          <div className="mr-[10%] text-white font-title1 
          lg:text-lg md:text-md sm:text-sm text-xs">
              Balance: ${state.currentContractorUser.balance}
          </div>
        </div>
        <div className='flex justify-center items-center mx-[10%] mt-28 lg:gap-12 md:gap-12 sm:gap-12 gap-8'>
          <div>
            <img src={installment} alt="Menue" className="lg:w-38 lg:h-28 md:w-32 md:h-24 sm:w-24 sm:h-16 w-28 h-16" />
          </div>
          <div>
            <p className='lg:text-lg md:text-lg sm:text-md text-sm text-text-color font-font'>
            Explore your transaction history below to review and track your payments.
            </p>
            <p className='lg:text-md md:text-md sm:text-sm text-xs text-gray font-font pt-2'>
            This provides a comprehensive overview of your past financial activities and ensures transparency in your payment records.
            </p>
          </div>
        </div>
        <div className='mx-[10%] my-24 border border-gray-dark rounded bg-white shadow-lg pb-6 
        hidden lg:block md:block sm:block'>
          <ul className='flex justify-between items-baseline
          lg:p-10 md:p-8 sm:p-6
          shadow-lg 
          border-b border-gray-dark
          bg-text-color text-white 
          lg:text-xl md:text-lg text-sm
          font-title'>
            <li className='pl-12'>Date</li>
            <li>From</li>
            <li>To</li>
            <li>Amount</li>
            <li className='pr-12'>Time</li>
          </ul>
          <div className='overflow-auto h-90 px-8 mt-4'>
            <History />
          </div>
        </div>
        <div className='mx-[10%] my-24 border border-gray-dark rounded bg-white shadow-lg pb-6 
        block lg:hidden md:hidden sm:hidden overflow-x-auto whitespace-no-wrap'>
          <ul className='flex justify-between items-baseline
          p-6
          shadow-lg 
          border-b border-gray-dark
          bg-text-color text-white
          font-title 
          w-91'>
            <li className='pl-12'>Date</li>
            <li>From</li>
            <li>To</li>
            <li>Amount</li>
            <li className='pr-12'>Time</li>
          </ul>
          <div className='overflow-auto h-90 px-8 mt-4 w-91'>
            <History />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
