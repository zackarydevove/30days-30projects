import React from 'react'
import './DarkTheme.css';

function Darktheme() {

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
    <div className='theme'>
        <label className='theme-label'>
        <input className='theme-input' type='checkbox' onClick={changeTheme} defaultChecked={prevTheme === 'dark'}></input>
        <span className='theme-span'></span>
        </label>
    </div>
  );
}
export default Darktheme
