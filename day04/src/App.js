import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutess] = useState(0);
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // effect function
    let interval = setInterval(() => {
      const newyr = new Date("January 1, 2024 00:00:00");
      const newyeartime = newyr.getTime();
      const todaytm = new Date();
      const todaytime = todaytm.getTime();
      const timeleft = newyeartime - todaytime;
      setDays(Math.floor(timeleft / (24 * 60 * 60 * 1000)));
      setHours(23 - todaytm.getHours());
      setMinutess(59 - todaytm.getMinutes());
      setSeconds(59 - todaytm.getSeconds());
    }, 1000);
    // clean-up function
    return () => {
      clearInterval(interval);
    };
  });

  if (days <= -1) {
    return (
      <div className="new-year">
        <h1>Happy New Year!!!</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>New Year Countdown</h1>
      <div className="countdown">
        <div>
          <h2>{days}</h2>
          <h6>Days</h6>
        </div>
        <div>
          <h2>{hours}</h2>
          <h6>Hours</h6>
        </div>
        <div>
          <h2>{minutes}</h2>
          <h6>Minutes</h6>
        </div>
        <div>
          <h2>{seconds}</h2>
          <h6>Seconds</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
