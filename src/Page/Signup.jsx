
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import './Signup.css'
// import '../index.css'

function Signup() {
const navigate =useNavigate();

function pageHandler1()
{
  navigate(-1);
}

    return (
        <div className='signup-container'>
            <h2>Signup</h2>
            {/* ...Signup form */}
            <div>
           Already have a account?
           <button onClick={pageHandler1}>Login</button>
          
           

            </div>
           
        </div>
    );
}

export default Signup;
