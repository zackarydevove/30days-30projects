import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Darktheme from './DarkTheme';

function Register() {
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const navigate = useNavigate();

    const register = () => {
      axios({
        method: 'POST',
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: 'http://localhost:5000/register',
      })
    .then((res) => {
        console.log(res);
        if (res.data === 'User already exists') {
            console.log('Redirecting to http://localhost:3000/login...')
            navigate("/login");
        }
        if (res.data === 'User created') {
            console.log('Redirecting to http://localhost:3000/login...')
            navigate("/login");
        }
    });
    }

    return (
        <div className='container'>
            <Darktheme />
            <h1>Register</h1>
            <input className='username' type='text' placeholder='username' onChange={(e) => setRegisterUsername(e.target.value)}></input>
            <input className='password' type='password' placeholder='password' onChange={(e) => setRegisterPassword(e.target.value)}></input>
            <button onClick={register} className='submit-button'>Submit</button>
            <p className='member'>Already a member? <Link className='link' to='/login' >Log In</Link></p>
        </div>
  )
}

export default Register
