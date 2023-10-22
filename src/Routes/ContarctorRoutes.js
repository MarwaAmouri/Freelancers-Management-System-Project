import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ContractorSignUpForm from '../Pages/Contractor Pages/ContarctorSignUpPage';
import ContractorDashboard from '../Pages/Contractor Pages/ContractorDashboardPage';

export default function ContarctorRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path='/Contractor/Signup' element={ <ContractorSignUpForm /> }></Route>
        <Route path='/Client/Clientdashboard' element={ <ContractorDashboard />}></Route>
      </Routes>
    </div>
  )
}
