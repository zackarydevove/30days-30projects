import './App.css';
import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(0);

  function handleClick(index) {
    setClicked(index);
  }

  return (
    <div className="container">
      <img src={require("./img/image1.jpg")} alt="image1" className={clicked === 1 ? "clicked" : "image1"} onClick={() => handleClick(1)}/>
      <img src={require("./img/image2.jpg")} alt="image2" className={clicked === 2 ? "clicked" : "image2"} onClick={() => handleClick(2)}/>
      <img src={require("./img/image3.jpg")} alt="image3" className={clicked === 3 ? "clicked" : "image3"} onClick={() => handleClick(3)}/>
      <img src={require("./img/image4.jpg")} alt="image4" className={clicked === 4 ? "clicked" : "image4"} onClick={() => handleClick(4)}/>
      <img src={require("./img/image5.jpg")} alt="image5" className={clicked === 5 ? "clicked" : "image5"} onClick={() => handleClick(5)}/>
    </div>
  );
}

export default App;
