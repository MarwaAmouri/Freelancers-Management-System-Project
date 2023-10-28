import { React, useState } from 'react';
import SendToContractorForm from '../../Components/SendToContractorForm';
import { Link } from 'react-router-dom';
import { useClientContext, actions as clientActions } from '../../Contexts/ClientContext';
import { useContractorContext, actions as contractorActions } from '../../Contexts/ContractorContext';

export default function Payment() {
  const [transaction, setTransaction] = useState({
    // sender: '',
    recipient: '',
    amount: '',
  });

  const { dispatch: clientDispatch } = useClientContext();
  const { dispatch: contractorDispatch } = useContractorContext();

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
      // alert('Contractor User Exsist');
      const sender = JSON.parse(localStorage.getItem('currentClientUser'))
      const senderBalance =  parseFloat(sender.balance) ;

      // console.log('Transaction Amount:', transactionAmount, typeof transactionAmount);
      // console.log('Sender Balance:', senderBalance, typeof senderBalance); 

      if (transactionAmount > senderBalance || transactionAmount === 0) {
        alert('Can not send ');
      } else {
        alert('sucsess ' + transactionAmount);
        // console.log('recipientContractor.balance:', typeof recipientContractor.balance);
        const newBalance = senderBalance - transactionAmount;
        const updateBalance = recipientContractor.balance + transactionAmount;

         console.log('Sender Balance:', newBalance);
         console.log('recipient Balance:', updateBalance);
        clientDispatch({ type: clientActions.UPDATE_BALANCE, payload: { newBalance } });
        contractorDispatch({ type: contractorActions.UPDATE_BALANCE, payload: { recipientContractor, transactionAmount, sender, updateBalance } });
      }
    } else {
      alert('No Contractor User Exsist');
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <SendToContractorForm 
      transaction={transaction}
      handleChange={handleChange}
      handleSendMoney={handleSendMoney}
      />
      <div>
        <Link Link to ="/client/clientdashboard">Back</Link>
      </div>
    </div>
  )
}
