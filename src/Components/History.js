import React from 'react';
import { useContractorContext } from '../Contexts/ContractorContext';
import { useClientContext } from '../Contexts/ClientContext';
import result from '../assets/seo.png'

export default function History() {
    const { state: contractorState } = useContractorContext();
    const { state: clientState } = useClientContext();

    const userTransactionsHistory = (currentUserId) => {
        const userTransactions = contractorState.transactionHistory.filter(
            (transaction) => transaction.senderId === currentUserId  || transaction.recipientId === currentUserId 
        );

        if (userTransactions.length === 0) {
            return <div className='flex justify-center items-center mt-32'>
                <div className='text-gray lg:text-xl md:text-xl sm:text-xl'>
                    <img src={result} alt="" className="lg:w-44 lg:h-44 md:w-44 md:h-44 sm:w-36 sm:h-36 w-32 h-32" />
                    <p>No Transactions yet!</p>
                </div>
            </div>;
        }

        userTransactions.reverse();

        return (
            <div className='overflow-x-auto whitespace-no-wrap'>
                <ul className='overflow-x-auto whitespace-no-wrap'>
                    {userTransactions.map((transaction, index) => (
                        <li
                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-stone'} 
                            border border-gray-dark shadow-md rounded-lg 
                            py-12
                            m-1 mb-6
                            overflow-x-auto whitespace-no-wrap`}
                            key={index}
                        >
                            <ul className='flex justify-between items-baseline px-4 mx-4 lg:text-lg md:text-md sm:text-sm'>
                                <li className='text-gray'>{formatDate(transaction.timestamp)}</li>
                                <li className='text-text-color'>{transaction.senderName}</li>
                                <li className='text-gray'>{transaction.recipientName}</li>
                                <li className='text-text-color'>{transaction.amount}</li>
                                <li className='text-gray'>{formatTime(transaction.timestamp)}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const formatTime = (timestamp) => {
        const dateTime = new Date(timestamp);
        const time = dateTime.toLocaleTimeString();

        return (
            <div>
                <p>{time}</p>
            </div>
        );
    };
    const formatDate = (timestamp) => {
        const dateTime = new Date(timestamp);
        const date = dateTime.toLocaleDateString(); 

        return (
            <div>
                <p>{date}</p>
            </div>
        );
    };

    if (clientState.currentClientUser) {
        const currentUserId = clientState.currentClientUser.id;
        return userTransactionsHistory(currentUserId);
    }
    else if(contractorState.currentContractorUser) {
        const currentUserId = contractorState.currentContractorUser.id;
        return userTransactionsHistory(currentUserId);
    }
}
