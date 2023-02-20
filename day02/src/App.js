import './App.css';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState([]);
  const [prev, setPrev] = useState ([]);
  const [sign, setSign] = useState ('');

  const handleClick = e => {
    const value = e.target.value;

    if (value === "AC"){
      setTab([]);
      setPrev([]);
    }
    else if (value >= "0" && value <= "9"){
      setTab([...tab, e.target.value]);
    }
    else if (value === "=" && sign) {
        let tabInt = tab.map(function (x) {
          return parseInt(x, 10);
        }).reduce((accum, digit) => (accum * 10) + digit, 0);

        let prevInt = prev.map(function (x) {
          return parseInt(x, 10);
        }).reduce((accum, digit) => (accum * 10) + digit, 0);

        let result = 0;

        console.log(prevInt);
        console.log(tabInt);

        switch(sign) {
          case '+':
            result = prevInt + tabInt;
            break;
          case '-':
            result = prevInt - tabInt;
            break;
          case '/':
            result = prevInt / tabInt;
            break;
          case '*':
            result = prevInt * tabInt;
            break;
          default:
            result = 0;
            break;
        }

        setPrev([result]);
        setTab([]);
        setSign('');
    }
    else {
      setPrev(tab);
      setTab([]);
      setSign(value);
    }
  }


  return (
    <div className="container">
      <div className="output">
        <p>{prev.toString().replaceAll(',', '')} {sign}</p>
        <input value={tab.toString().replaceAll(',', '')}></input>
      </div>
      <div className="row">
        <button onClick={handleClick} value="1">1</button>
        <button onClick={handleClick} value="2">2</button>
        <button onClick={handleClick} value="3">3</button>
        <button onClick={handleClick} value="*">*</button>
      </div>
      <div className="row">
        <button onClick={handleClick} value="4">4</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="6">6</button>
        <button onClick={handleClick} value="/">/</button>
      </div>
      <div className="row">
        <button onClick={handleClick} value="7">7</button>
        <button onClick={handleClick} value="8">8</button>
        <button onClick={handleClick} value="9">9</button>
        <button onClick={handleClick} value="+">+</button>
      </div>
      <div className="row">
        <button onClick={handleClick} value="AC">AC</button>
        <button onClick={handleClick} value="0">0</button>
        <button onClick={handleClick} value=".">.</button>
        <button onClick={handleClick} value="=">=</button>
      </div>
    </div>
  );
}

export default App;
