import './App.css';
import { useState } from 'react';

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
  }
  const handleClick = () => {
    setIsHidden(!isHidden);
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." name="search" className={isHidden ? 'open' : 'close'}></input>
        <button type="submit" className='search-button' onClick={handleClick}><i className="fa fa-search"></i></button>
      </form>
    </>
  );
}

export default App;
