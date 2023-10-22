import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import ContarctorRoutes from './ContarctorRoutes';
import Home from '../Pages/Home';
import ClientSignUpForm from '../Pages/Client Pages/ClientSignUpPage';
import ClientDashboardPage from '../Pages/Client Pages/ClientDashboardPage';
import Profile from '../Pages/Client Pages/Profile';
import ContractorSignUpForm from '../Pages/Contractor Pages/ContarctorSignUpPage';
import ContractorDashboard from '../Pages/Contractor Pages/ContractorDashboardPage';
import ClientRoutes from './ClientRoutes';

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
          <Route path='/Login' element={ <Login /> }></Route>
          <Route path='/Signup' element={ <SignUp /> }></Route>
          <Route path='/client/Signup' element={ <ClientSignUpForm /> }></Route>
          <Route path='/client/clientdashboard' element={ <ClientDashboardPage />}></Route>
          <Route path='/client/clientdashboard/Profile' element={ <Profile /> }></Route>
          <Route path='/Contractor/Signup' element={ <ContractorSignUpForm /> }></Route>
          <Route path='/Contractor/contractordashboard' element={ <ContractorDashboard /> }></Route>
          <Route path="/contractor" element={ContarctorRoutes} />
          <Route path="/contractor" element={ClientRoutes} />
        </Routes>
      </Router>
    </div>
  )
}
