import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import ClientSignUpForm from '../Pages/Client Pages/ClientSignUpPage';
import ClientDashboardPage from '../Pages/Client Pages/ClientDashboardPage';
import Profile from '../Pages/Client Pages/Profile';

export default function ClientRoutes() {
  return (
    <div>
        <Route path='/client/Signup' element={ <ClientSignUpForm /> }></Route>
        <Route exact path='/client/Clientdashboard' element={ <ClientDashboardPage />}></Route>
        <Route path='/client/Clientdashboard/Profile' element={ <Profile />}></Route>
    </div>
  )
}
