import logo from './logo.svg';
import './App.css';

function App() {

  // classList.toggle change the className to the argument string
  // so in the first one we change the classname of the
  const handleClick = e => {
    e.currentTarget.classList.toggle("change");
    document.querySelector(".menu").classList.toggle("show");
    document.querySelector(".navbar").classList.toggle("open");
  };

  return (
    <>
    <div className="navbar">
      <div className="container" onClick={handleClick}>
        <div className="hamburger1"></div>
        <div className="hamburger2"></div>
        <div className="hamburger3"></div>
        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
