import './App.css';
import { useRef, useCallback, useState, useEffect } from 'react';
import Darktheme from './DarkTheme';

function App() {
  const [show, setShow] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastElement = useRef();

  const lastElementCallback = useCallback(node => {
    if (lastElement.current) lastElement.current.disconnect();
    lastElement.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) lastElement.current.observe(node);
  }, []);


  useEffect(() => {
    if (loading) {
      setLoading(false);
      setShow(prevShow =>
        prevShow.concat(
          Array.from({ length: 10 }, (_, index) => 10 * (pageNumber - 1) + index + 1)
        )
      );
    }
  }, [loading, pageNumber]);


  return (
    <div className='container'>
      <Darktheme/>
      <h1>Infinite Scrolling</h1>
      {show.map(key => (
        <div className='box' key={key}>
          <p ref={key === show[show.length - 1] ? lastElementCallback : null}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
