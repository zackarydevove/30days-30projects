import './App.css';
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    setInterval( () => {
      const currentDate = new Date();
      const secondsRatio = currentDate.getSeconds() / 60
      const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
      const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
      
      const hourHand = document.querySelector('[data-hour-hand]')
      const minuteHand = document.querySelector('[data-minute-hand]')
      const secondHand = document.querySelector('[data-second-hand]')

      secondHand.style.setProperty('--rotation', secondsRatio * 360)
      minuteHand.style.setProperty('--rotation', minutesRatio * 360)
      hourHand.style.setProperty('--rotation', hoursRatio * 360)
    }, 1000);
  })

  return (
    <div className="clock">
      <div class="hand hour" data-hour-hand></div>
      <div class="hand minute" data-minute-hand></div>
      <div class="hand second" data-second-hand></div>

      <div class="center-box"/>

      <div class="number number1">1</div>
      <div class="number number2">2</div>
      <div class="number number3">3</div>
      <div class="number number4">4</div>
      <div class="number number5">5</div>
      <div class="number number6">6</div>
      <div class="number number7">7</div>
      <div class="number number8">8</div>
      <div class="number number9">9</div>
      <div class="number number10">10</div>
      <div class="number number11">11</div>
      <div class="number number12">12</div>
    </div>
  );
}

export default App;
