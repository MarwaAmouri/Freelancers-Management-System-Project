import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>Home Page
        <ul>
            <li>
              <Link to ="/Login">Go to Login Page</Link>
            </li>
            <li>
              <Link to ="/Signup">Go to Signup Page</Link>
            </li>
        </ul>
    </div>
  )
}
