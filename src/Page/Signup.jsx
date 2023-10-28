
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Signup() {
    const [email ,setEmail]=useState("");
    const [btndisable,setbtnDisable]=useState(true);
    const [isValidEmail ,setIsValidEmail]=useState(true);
  const [notice1,setNotice1]=useState("");
   const [noticeSN,setnoticeSn]=useState("");
   const [stNumber,setStudentNumber]=useState("");
   const [number,setNumber]=useState("");
   const [isvalidstnum,setvalidstnum]=useState('');
   


   function changeHandler(e)
   {
    const email=e.target.value;
    setEmail(email);
   }
   function numberHandler(e)
   {const number=e.target.value;
    setNumber(number);

   }
   function StudentnumberHandler(e)
   {
     const stnumber=e.target.value;
     setStudentNumber(stnumber);
   }

    return (
        <div className='signup-container'>
           <form action='#'>
           <h2 className='main-heading1'> Welcome!</h2>
        <h3 className='heading1'>Please,enter your details</h3>

         <div className='input-field1 linked1'>
   <input type='text' placeholder='Enter Your Name' required></input>
        <div className='error-message'></div>
         </div>

        <div className='input-field1 linked1'>
          <input type='email' value={email} onChange={changeHandler} required placeholder='Enter Your Email'></input>
          <div className='error-message'></div>
        </div>

            {!isValidEmail && <p className="error-message">{notice1}</p>}

            <div className='input-field1 linked1'>
          <input type='number' value={number} onChange={numberHandler}  placeholder='Enter Your Phone Number' required></input>
          <div className='error-message'></div>
        </div>

        <div className='input-field1 linked1'>
          <input type='number' value={stNumber} onChange={StudentnumberHandler}  placeholder='Enter Your Student Number' required></input>
          <div className='error-message'></div>
        </div>
           {!isvalidstnum && <p className='error-message'>{noticeSN}</p>}

           <div className='input-field1  button'>
          <button disabled={btndisable}>Sign up</button>
          <p>
            Already have a account ?{" "}<Link to='/login' className="link">Sign in</Link>
          </p>
        </div>

           </form>
           
        </div>
    );
}

export default Signup;
