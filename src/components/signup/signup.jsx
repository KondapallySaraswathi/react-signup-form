import React, { useState } from 'react';
import "./signup.css"

export const Signup = () => {

    const [title,settitle] = useState('Sign Up');
   function handle(){
    if (title === "Sign Up") {
        settitle("Login")
    }else{
        settitle("Sign Up")
    }
   }
    return (
        <div className='container'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <p>{title === 'Sign Up' ? "if you have an Account ? ": "You don't have an Account ? "}<span onClick={handle} role='button'>{title === 'Sign Up' ? "Login" : "Signup"}</span></p>
            <div className='inputs'>
            {title === "Sign Up" && <input type='text' placeholder='Full Name'></input>}
                <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
            </div>
            <div className='button'>
                <button>{title}</button>
            </div>
        </div>

    )
}

