import { React, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import SendToContractorForm from '../../Components/ClientComponents/SendToContractorForm';
import ClientNav from '../../Components/ClientComponents/ClientNav';
import { useNavigate } from 'react-router-dom';
import { useClientContext, actions as clientActions } from '../../Contexts/ClientContext';
import { useContractorContext, actions as contractorActions } from '../../Contexts/ContractorContext';
import exclamation from '../../assets/exclamation-mark.png'

export default function Payment() {
  const [transaction, setTransaction] = useState({
    recipient: '',
    amount: '',
  });

  const { state: clientState, dispatch: clientDispatch } = useClientContext();
  const { dispatch: contractorDispatch } = useContractorContext();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSendMoney = () => {
    const recipientEmail = transaction.recipient;
    const transactionAmount = parseFloat(transaction.amount);
    const storedContractorUsers = JSON.parse(localStorage.getItem('registeredContractorUsers')) || [];
    const recipientContractor = storedContractorUsers.find(
      (user) =>
        user.email === recipientEmail
    );

    if (recipientContractor) {
      const sender = JSON.parse(localStorage.getItem('currentClientUser'))
      const senderBalance =  parseFloat(sender.balance);

      if (transactionAmount > senderBalance) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Insufficient funds to complete the transaction.',
          footer: 'Please top up your account. <a href="/client/profile">Add funds</a>'
        })
      } else if(transactionAmount <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid value. Please enter a valid transaction amount.'
        })
      } else {
        const newBalance = senderBalance - transactionAmount; // for client
        const updateBalance = recipientContractor.balance + transactionAmount; // for contractor

        const updateBalances = () => {
          clientDispatch({ type: clientActions.UPDATE_BALANCE, payload: { newBalance } });
          contractorDispatch({ type: contractorActions.UPDATE_BALANCE, payload: { recipientContractor, transactionAmount, sender, updateBalance } });
        };
        
        Swal.fire({
          title: 'Are you sure?',
          text: `You are about to send ${transactionAmount} to ${recipientContractor.username}'s email (${recipientContractor.email}). This action is irreversible.`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, send money'
        }).then((result) => {
          if (result.isConfirmed) {
            updateBalances();

            Swal.fire(
              'Money Sent!',
              `You have successfully sent ${transactionAmount} to ${recipientContractor.username}. Your new balance is ${newBalance}.`,
              'success'
            )

            setTransaction({ ...transaction,
              recipient: '', 
              amount: ''
            });

          }
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The email you entered for the contractor is not valid. Please double-check and try again.'
      })
    }
  };

  useEffect(() => {
    if (!clientState.currentClientUser) {
      navigate('/Login');
    }
  }, [clientState.currentClientUser]);

  if (clientState.currentClientUser) {
    return (
      <div className='bg-bg-color'>
        <ClientNav />
        <div className="flex justify-between items-center 
        border-t border-b border-gray shadow-xl
        h-40
        lg:mt-24 md:mt-20 sm:mt-18 mt-16
      bg-text-color">
          <div className="text-white font-title1
          lg:text-2xl md:text-lg sm:text-md text-md
          lg:ml-36 md:ml-24 sm:ml-18 ml-12">
            Payment
          </div>
          <div className="mr-[10%] text-white font-title1 
          lg:text-lg md:text-md sm:text-sm text-xs">
            Balance: ${clientState.currentClientUser.balance}
          </div>
        </div>
        <div className='lg:flex md:flex items-center mx-[10%] gap-12'>
          <div className='lg:w-[32%] md:w-[32%]'>
            <div className='lg:mb-4 md:mb-4 mt-6 flex gap-3'>
              <img src={exclamation} alt="" className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-10 h-10 flex lg:ml-[30%] md:ml-[30%] mb-2" /> 
              <p className='text-xl text-text-color font-text1 font-bold py-1 lg:hidden md:hidden block '>
              Double-Check Details
            </p>
            </div>
            <p className='lg:text-2xl md:text-xl text-text-color font-text1 font-bold py-1 lg:block md:block hidden'>
              Double-Check Details
            </p>
            <div className='text-gray lg:text-md md:text-sm font-title py-3 lg:ml-0 md:ml-0 ml-[8%]'>
              <p>
                Payments are irreversible.
              </p>
              <p>
                Verify the contractor's payment info before proceeding.
              </p>
              <p>
                Ensure accuracy to avoid any issues.
              </p>
            </div>
          </div>
          <div className='lg:w-[60%] md:w-[60%]'>
            <SendToContractorForm 
            transaction={transaction}
            handleChange={handleChange}
            handleSendMoney={handleSendMoney}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
