import React, { PureComponent } from 'react';
import { useContractorContext } from '../Contexts/ContractorContext';
import { useClientContext } from '../Contexts/ClientContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function BalanceChart() {

 const { state: contractorState } = useContractorContext();
  const { state: clientState } = useClientContext();

  let userTransactionAmounts = [];

  const userBalnaceData = (currentUserId) => {
    const userTransactions = contractorState.transactionHistory.filter(
      (transaction) => transaction.senderId === currentUserId || transaction.recipientId === currentUserId
    );
    userTransactionAmounts = userTransactions.map((transaction) => {
      const date = new Date(transaction.timestamp);
      return {
        name: date.toLocaleDateString(),
        amount: transaction.amount,
      };
    });
  };

  if (clientState.currentClientUser) {
    const currentUserId = clientState.currentClientUser.id;
    userBalnaceData(currentUserId);
  } else if (contractorState.currentContractorUser) {
    const currentUserId = contractorState.currentContractorUser.id;
    userBalnaceData(currentUserId);
  }

  console.log('userTransactionAmounts:', userTransactionAmounts);

  return (
    <div>
      <div className='block md:hidden lg:hidden sm:hidden mt-16'>
        <AreaChart
          width={350}
          height={200}
          data={userTransactionAmounts}
          margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
          }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
      </div>
      <div className='hidden md:block lg:block sm:block mt-32'> 
          <AreaChart
          width={550}
          height={400}
          data={userTransactionAmounts}
          margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
          }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
      </div>
    </div>
  )
}
