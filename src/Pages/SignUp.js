import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
        <h1>SignUp</h1>
        <ul>
        <li>
            <Link to ="/client/Signup">Go to Sign Up Client Page</Link>
        </li>
        <li>
            <Link to ="/Contractor/Signup">Go to Sign up Contractor Page</Link>
        </li>
        </ul>
    </div>
  )
}
