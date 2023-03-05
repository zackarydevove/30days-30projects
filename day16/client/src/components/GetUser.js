import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Darktheme from './DarkTheme';

function GetUser() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const logout = () => {
        axios({
          method: 'POST',
          data: { username: data.username },
          withCredentials: true,
          url: 'http://localhost:5000/logout',
        })
        console.log('Logout Successfully');
        setData(null);
        navigate("/login");
    }

    const getUser = () => {
        axios({
          method: 'GET',
          withCredentials: true,
          url: 'http://localhost:5000/user',
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
      }

  return (
    <div className='container'>
    <Darktheme />
            <h1>Profile</h1>
            <button className='submit-button' onClick={getUser}>Get User Info</button>
            {data ? 
            <div className='auth'>
                <h2>You are authenticated {data.username}!</h2> 
                <button onClick={logout}>Logout</button>
            </div>
            : null}
    </div>
  )
}

export default GetUser
