
import React from 'react';
import { Link } from 'react-router-dom';
import main from '../Image/main.png'
import side from '../Image/side.png'
import  { useState } from 'react';

function Login({children}) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });


  function validateInput (name, value)  {
    const errorsCopy = { ...errors };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^2.{7,}$/; 

   if(name=== 'email')
   {
    errorsCopy.email = emailRegex.test(value) ? '': 'Invalid email format';
   }
    if(name=== 'password')
    {
      errorsCopy.password = passwordRegex.test(value) ? '': 'Wrong Password';
    }
  
    setErrors(errorsCopy);
  };


function changeHandler(e)
{
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  validateInput(name, value);
};

  return (

   <div className='login-container'>
    <form action='#'>
        <h2 className='main-heading'> Welcome!</h2>
        <h3 className='heading'>Please,enter your details</h3>
        <div className='input-field linked'>
          <input type='email' name='email' value={formData.email} onChange={changeHandler} pattern='./@gmail.com' required placeholder='Enter Your Email'></input>
          <div className='error-message'><p>{errors.email}</p></div>
        </div>
     
        <div className='input-field'>
          <input type='password' name='password' value={formData.password} onChange={changeHandler} required placeholder='Enter Your Password'></input>
          <div className='error-message'><p>{errors.password}</p></div>
          <div className='linked'><Link to="/" className="link">Forget Password</Link></div>
               
        </div>
        <div className='input-field  button'>
          <button
          //  disabled={btndisable}
           >Sign in</button>
          <p>
            Don't have an account?{" "}<Link to='/' className="link">Sign up</Link>
          </p>
        </div>
    </form>
          
 </div>
          
    );
}

export default Login 
