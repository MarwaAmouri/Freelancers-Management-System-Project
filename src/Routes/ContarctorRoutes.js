import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ContractorDashboard from '../Pages/Contractor Pages/ContractorDashboardPage';
import ContractorProfile from '../Pages/Contractor Pages/ContractorProfilePage';

export default function ContarctorRoutes() {
  return (
    <Routes>
      <Route path="contractordashboard" element={<ContractorDashboard />} />
      <Route path="contractorProfile" element={<ContractorProfile />} />
    </Routes>
  );
}
