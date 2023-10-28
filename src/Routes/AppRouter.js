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
import ClientSettingPage from '../Pages/Client Pages/ClientSettingPage';
import Payment from '../Pages/Client Pages/Payment';
import ClientRoutes from './ClientRoutes';
import ContarctorRoutes from './ContarctorRoutes';

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
        <Route path="/client/clientdashboard" element={<ClientDashboard />} />
        <Route path="/client/clientProfile" element={<ClientProfile />} />
        <Route path="/client/clientProfile/setting" element={<ClientSettingPage />} />
        <Route path="/client/payment" element={<Payment />} />
        {/* Contractor Roues */}
        <Route path="/contractor/contractordashboard" element={<ContractorDashboard />} />
        <Route path="/contractor/contractorProfile" element={<ContractorProfile />} />

        {/*
        <Route path="/contractor" element={<ContarctorRoutes />} />
        <Route path="/client" element={<ClientRoutes />} /> 
        */}
      </Routes>
    </Router>
  );
}
