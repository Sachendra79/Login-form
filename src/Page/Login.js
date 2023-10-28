
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import main from '../Image/main.png'
import side from '../Image/side.png'
import  { useState } from 'react';

function Login() {

  const navigate =useNavigate();

  function pageHandler()
  {
    navigate("/signup");
  }
 


    return (

      
        <div className='login-container'>

           <div className='main' >


       
          <div className='side-img'>
                   {/* <img src={side}></img> */}
                   
                   </div>
              
               <div className='main-img'>
                   {/* <img src={main} alt='sorry'></img> */}
               
                   </div>
      
              
                <div className='form-container'>
                  <div className='heading'> <h1>Login Here!</h1></div>
             
      
                <form >
                  <div className='form-elements'>


                  <div className='' >
                <input
                    type="text"
                    placeholder="Name"
                  
                  
                />
                </div>

                <div >
                <input
                    type="password"
                    placeholder="Enter Your Password here"
                  
                  
                />
                </div>
                
                
               
              
              <div className='form-button'>Don't have an account? <button onClick={pageHandler}>Signup</button> </div>
                  </div>
                
            </form>


                  
                  
                </div>
 </div>
          </div>
    );
}

export default Login 
