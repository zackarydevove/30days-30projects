import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [sentence, setSentence] = useState('Loading...')

  useEffect(() => {
    const string = 'Hello World!'
    let idx = 0
    const intervalId = setInterval(() => {
      setSentence(string.slice(0, idx));
      if (idx > string.length) { 
        idx = 0;
        setSentence('') 
      } else {
        idx++;
      }
    }, 200)
    return () => clearInterval(intervalId);
  }, [])

  function setLight() {
    document.querySelector('body').setAttribute('theme', 'light');
    localStorage.setItem('prevTheme', 'light');
  }

  function setDark() {
    document.querySelector('body').setAttribute('theme', 'dark');
    localStorage.setItem('prevTheme', 'dark');
  }

  const changeTheme = e => {
    if (e.target.checked) setDark();
    else setLight();
  }

  const prevTheme = localStorage.getItem('prevTheme');

  if (prevTheme === 'dark') setDark();

  return (
    <>
      <h1>{sentence}</h1>
      <p>This was fun to do</p>
      <div className='theme'>
        <label className='theme-label'>
          <input className='theme-input' type='checkbox' onClick={changeTheme} defaultChecked={prevTheme === 'dark'}></input>
          <span className='theme-span'></span>
        </label>
      </div>
    </>
  );
}

export default App;
