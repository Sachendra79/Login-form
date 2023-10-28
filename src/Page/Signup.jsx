
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Signup() {

    const [formData, setFormData] = useState({ email: '',name: '',number: '',stNumber: '' });
    const [errors, setErrors] = useState({ email: '',name: '',number: '',stNumber: '' });
  
function validateInput (name, value)  {
    const errorsCopy = { ...errors };
   

  
    setErrors(errorsCopy);
  };

function changeHandler(e)
{
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  validateInput(name, value);
};
 
    return (
        <div className='signup-container'>
           <form action='#'>
           <h2 className='main-heading1'> Welcome!</h2>
        <h3 className='heading1'>Please,enter your details</h3>

         <div className='input-field1 linked1'>
   <input type='text' placeholder='Enter Your Name' name='username' value={formData.name} onChange={changeHandler} required></input>
        <div className='error-message'>{errors.username}</div>
         </div>

        <div className='input-field1 linked1'>
          <input type='email' value={formData.email} name='email' onChange={changeHandler} required placeholder='Enter Your Email'></input>
          <div className='error-message'>{errors.email}</div>
        </div>

       

            <div className='input-field1 linked1'>
          <input type='number' value={formData.number} name='number' onChange={changeHandler}  placeholder='Enter Your Phone Number' required></input>
          <div className='error-message'>{errors.number}</div>
        </div>

        <div className='input-field1 linked1'>
          <input type='number' value={formData.stNumber} name='stNumber' onChange={changeHandler}  placeholder='Enter Your Student Number' required></input>
          <div className='error-message'>{errors.stNumber}</div>
        </div>
          

           <div className='input-field1  button'>
          <button 
        //   disabled={btndisable}
          >Sign up</button>
          <p>
            Already have a account ?{" "}<Link to='/login' className="link">Sign in</Link>
          </p>
        </div>

           </form>
           
        </div>
    );
}

export default Signup;
