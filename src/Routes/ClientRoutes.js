import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ClientDashboard from '../Pages/Client Pages/ClientDashboardPage';
import ClientProfile from '../Pages/Client Pages/ClientProfilePage';

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="clientdashboard" element={<ClientDashboard />} />
      <Route path="clientProfile" element={<ClientProfile />} />
    </Routes>
  );
}
