import './App.css';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <img src={require('./overbackground.png')} className={open ? "hide" : "overbackground"} />

      <header>
        <img src={require('./logo.png')} className={open ? "hide" : "logo"}/>

        <div className={open ? "open" : "navbar"}>
          <div className="container" >

            <div className="hamburger" onClick={handleClick}>
              <div className={open ? "change1" : "hamburger1"}></div>
              <div className={open ? "change2" : "hamburger2"}></div>
              <div className={open ? "change3" : "hamburger3"}></div>
            </div>

            <div className={open ? "show" : "menu"}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Box Reveal</a></li>
                <li><a href="#">Lore</a></li>
                <li><a href="#">Custom</a></li>
                <li><a href="#">My Zoku</a></li>
                <li><a href="#">Jumps</a></li>
                <li><a href="#">Collection</a></li>
              </ul>
            </div>

          </div>

          <div className="nav">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Box Reveal</a></li>
                <li><a href="#">Lore</a></li>
                <li><a href="#">Custom</a></li>
                <li><a href="#">My Zoku</a></li>
                <li><a href="#">Jumps</a></li>
                <li><a href="#">Collection</a></li>
              </ul>
          </div>
        </div>

        <div className={open ? "hide" : "socials"}>
          <img src={require('./discord.png')} />
          <img src={require('./twitter.png')} />
          <img src={require('./instagram.png')} />
        </div>
      </header>
    </>
  );
}

export default App;
