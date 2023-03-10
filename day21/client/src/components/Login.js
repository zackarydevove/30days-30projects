import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Darktheme from './DarkTheme';

function Login() {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState(null);
    const navigate = useNavigate();

    const login = () => {
        axios({
          method: 'POST',
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: 'http://localhost:5000/login',
        }).then((res) => {
          setLoginInfo(res.data);
          console.log(res.data);
          if (res.data !== 'No user exists') {
            navigate("/getuser");
          }
        });
    }

    const googleLogin = () => {
      window.open('http://localhost:5000/auth/google', '_self');
    }

  return (
    <div className='div'>
    <div className='container'>
    <Darktheme />
        <h1>Login</h1>
        <input type='text' placeholder='username' onChange={(e) => setLoginUsername(e.target.value)}></input>
        <input type='password' placeholder='password' onChange={(e) => setLoginPassword(e.target.value)}></input>
        {loginInfo === 'No user exists' ? <p className='exist'>Wrong username or password</p> : null}
        <button onClick={login} className='submit-button'>Submit</button>
        <p className='member'>Not a member? <Link className='link' to='/'>Sign up</Link></p>
    </div>

    <p> or </p>

      <div className="google-btn" onClick={googleLogin}>
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
      <div className='btn-div'>
        <p className="btn-text"><b>Sign in with google</b></p>
      </div>
      
    </div>
    </div>
  )
}

export default Login
