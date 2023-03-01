import './App.css';
import { useState } from 'react';


function App() {
  const [checkbox, setCheckbox] = useState([]);
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');



  const handleChange = e => {
    if (e.target.value.length < 3 && (/^\d+$/.test(e.target.value) || e.target.value === '')) {
      setLength(e.target.value);
    }
  }

  const handleClick = () => {
    let indexCheck = 0;
    for (indexCheck; indexCheck <= 3; indexCheck++) {
      if (checkbox[indexCheck] === true)
        break;
    }
    if (indexCheck === 4) {
      alert('Please check at least 1 box');
      return;
    }
    const charsets = [
      "!@#$%^&*()_",
      "0123456789",
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ]

    let pw = '';
    for (let i = 0; i < length; i++)
    {
      let idx = -1;
      // Get a random idx between 0 and 3 for the charsets
      do {
        idx = Math.floor(Math.random() * 4);
      } while (!checkbox[idx]);

      let index = -1;
    // Get a random index between 0 and the length of the string
      do {
        index = Math.floor(Math.random() * charsets[idx].length);
      } while (index < 0 || index > charsets[idx].length - 1);
    
    // Add it to the password string
      pw += charsets[idx][index];
    }
    setPassword(pw);
  }

  function handleCheck(e, i) {
    const newCheckbox = [...checkbox];
    newCheckbox[i] = e.target.checked;
    setCheckbox(newCheckbox);
  }

  return (
    <>
      <div className="container">

        
        <h1>Password Generator</h1>
        <div className="box-checker">
          <p>Symbols</p>
          <label className='switch'>
            <input type='checkbox' onChange={e => { handleCheck(e, 0) }}></input>
            <span></span>
          </label>
        </div>

        <div className="box-checker">
          <p>Numbers</p>
          <label className='switch'>
            <input type='checkbox' onChange={e => { handleCheck(e, 1) }}></input>
            <span></span>
          </label>
        </div>

        <div className="box-checker">
          <p>Lowercase</p>
          <label className='switch'>
            <input type='checkbox' onChange={e => { handleCheck(e, 2) }}></input>
            <span></span>
          </label>
        </div>

        <div className="box-checker">
          <p>Uppercase</p>
          <label className='switch'>
            <input type='checkbox' onChange={e => { handleCheck(e, 3) }}></input>
            <span></span>
          </label>
        </div>
        
        <div className="box-checker password">
          <p>Password Length: {length}</p>
          <input value={length} onChange={handleChange} type="range" min="4" max="32"></input>
        </div>

        {/* <div class="length range__slider" data-min="4" data-max="32">
          <div class="length__title field-title" data-length='0'>length:</div>
          <input id="slider" type="range" min="4" max="32" value="16" />
        </div> */}

        <button onClick={handleClick}>GENERATE PASSWORD</button>
        <input value={password} className="output"></input>
      </div>
    </>
  );
}

export default App;
