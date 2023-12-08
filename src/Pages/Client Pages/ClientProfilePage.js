import React, { useEffect } from 'react'
import { useClientContext } from '../../Contexts/ClientContext';
import { useNavigate } from 'react-router-dom';
import ClientNav from '../../Components/ClientComponents/ClientNav';
import ClientSelfTransfer from '../../Components/ClientComponents/ClientSelfTransfer';
import user from '../../assets/user.png'

export default function ClientProfilePage() {

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
        <ClientNav />
        <div className="border-t border-b border-gray shadow-xl
        h-72
        lg:mt-24 md:mt-20 sm:mt-18 mt-16
      bg-text-color">
        <div className='flex justify-end mr-24 mt-16 
        lg:-mb-12 md:-mb-8 -mb-24'>
          <ClientSelfTransfer />
        </div>
          <div className='lex justify-center items-center
          lg:mx-[10%] md:mx-[15%] sm:mx-[10%] mx-[10%]
          lg:mt-24 md:mt-28 sm:mt-36 mt-44'>
            <div className="w-[80%]
            border border-gray-dark rounded-md shadow-md
          bg-stone
            mb-4">
             <div className='lg:ml-[20%] md:ml-[20%] sm:ml-[18%] ml-[30%] 
             lg:-mt-14 md:-mt-12 sm:-mt-12 -mt-10 p-2'>
                <img src={user} alt="User" 
                className="lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-24 sm:h-24 w-20 h-20
                rounded-full border-4 border-white shadow-xl
                outline outline-text-color outline-offset-1 outline-4" 
                /> 
              </div>
              <div className='flex items-baseline 
              lg:ml-[43%] md:ml-[47%] sm:ml-[45%] ml-[33%]
              lg:-mt-12 md:-mt-12 sm:-mt-12 mt-6
              font-title1 text-text-color 
              lg:text-2xl md:xl'>
                <div>{state.currentClientUser.firstName}&nbsp;</div>
                <div>{state.currentClientUser.lastName}</div>
              </div>
              <div className="ml-[20%] mb-8 text-gray font-title
              lg:text-lg md:text-md sm:text-sm text-sm
              lg:mt-20 md:mt-20 sm:mt-16 mt-8
              mr-6">
                <div className="my-6">Email Address: {state.currentClientUser.email}</div>
                <div className="my-6">Username: {state.currentClientUser.username}</div>
                <div className="mt-6">Account Balance: $ {state.currentClientUser.balance}</div>
                <div className="mt-6 mb-20">Registered as a client</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  } else {
    return null;
  }
}
