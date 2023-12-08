import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useClientContext } from '../../Contexts/ClientContext';
import ClientNav from '../../Components/ClientComponents/ClientNav';
import BalanceChart from '../../Components/BalanceChart';
import analytics from '../../assets/data-analysis.png'

export default function ClientDashboardPage() {
  const { state } = useClientContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.currentClientUser) {
      navigate('/Login');
    }
  }, [state.currentClientUser]);

  if (state.currentClientUser) {
    return (
      <div>
        <div className="flex justify-between items-center 
        border-t border-b border-gray shadow-xl
        h-40
        lg:mt-24 md:mt-20 sm:mt-18 mt-16
      bg-text-color">
          <div className="text-white font-title1
          lg:text-2xl md:text-lg sm:text-md text-md
          lg:ml-36 md:ml-24 sm:ml-18 ml-12">
            Welcome, {state.currentClientUser.firstName}! 👋
          </div>
          <div className="mr-[10%] text-white font-title1 
          lg:text-lg md:text-md sm:text-sm text-xs">
            Balance: ${state.currentClientUser.balance}
          </div>
        </div>
        <div className='lg:flex md:flex sm:flex justify-center items-center mx-[15%] gap-10 mt-24'>
          <img src={analytics} alt="" className="lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-20 sm:h-20 w-16 h-16 lg:flex md:flex sm:flex hidden" /> 
          <p className='text-gray lg:text-xl md:text-lg text-md font-title'>Hi {state.currentClientUser.firstName}, 
            As part of our commitment to transparency and to help you keep track of your account, 
            we have prepared a chart designed to provide you with a clear snapshot of your account's financial activity.
          </p>
        </div>
        <div className='mb-16 flex justify-center'>
        <BalanceChart />
        </div>
        <ClientNav />
      </div>
    );
  } else {
    return null;
  }
}