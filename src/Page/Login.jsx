
import React from 'react';
import { Link } from 'react-router-dom';
import main from '../Image/main.png'
import side from '../Image/side.png'
import  { useState } from 'react';

function Login({children}) {
 const[email,setEmail]=useState('');
const [isValidEmail,setisvalidEmail]=useState(true);
const [btndisable,setbtnDisable]=useState(true);
const [notice,setNotice]=useState("");
const [password,setPassword]=useState("");

function changeHandler(e)
{
    const inputemail=e.target.value;
    setEmail(inputemail);
};
function passwordchangeHandler(e)
{

}

  return (

   <div className='login-container'>
    <form action='#'>
        <h2 className='main-heading'> Welcome!</h2>
        <h3 className='heading'>Please,enter your details</h3>
        <div className='input-field linked'>
          <input type='email' value={email} onChange={changeHandler} pattern='./@gmail.com' required placeholder='Enter Your Email'></input>
          <div className='error-message'></div>
        </div>
     {!isValidEmail && <p className='error-message'>{notice}</p>}
        <div className='input-field'>
          <input type='password'  onChange={passwordchangeHandler} required placeholder='Enter Your Password'></input>
          <div className='linked'><Link to="/" className="link">Forget Password</Link>
          </div>
        </div>
        <div className='input-field  button'>
          <button disabled={btndisable}>Sign in</button>
          <p>
            Don't have an account?{" "}<Link to='/' className="link">Sign up</Link>
          </p>
        </div>
    </form>
          
 </div>
          
    );
}

export default Login 
