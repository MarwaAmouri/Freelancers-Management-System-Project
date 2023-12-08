import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Home from '../Pages/Home';
import ClientSignUpForm from '../Pages/Client Pages/ClientSignUpPage';
import ContractorSignUpForm from '../Pages/Contractor Pages/ContarctorSignUpPage';
import ClientDashboard from '../Pages/Client Pages/ClientDashboardPage';
import ClientProfile from '../Pages/Client Pages/ClientProfilePage';
import ContractorDashboard from '../Pages/Contractor Pages/ContractorDashboardPage';
import ContractorProfile from '../Pages/Contractor Pages/ContractorProfilePage';
import Payment from '../Pages/Client Pages/Payment';
import ClientHistoryPage from '../Pages/Client Pages/ClientHistoryPage';
import ContractorHistoryPage from '../Pages/Contractor Pages/ContractorHistoryPage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/client/Signup" element={<ClientSignUpForm />} />
        <Route path="/Contractor/Signup" element={<ContractorSignUpForm />} />
        {/* Client Roues */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/client/payment" element={<Payment />} />
        <Route path="/client/history" element={<ClientHistoryPage />} />
        {/* Contractor Roues */}
        <Route path="/contractor/dashboard" element={<ContractorDashboard />} />
        <Route path="/contractor/profile" element={<ContractorProfile />} />
        <Route path="/contractor/history" element={<ContractorHistoryPage />} />
      </Routes>
    </Router>
  );
}
