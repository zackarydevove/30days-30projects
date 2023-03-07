import './App.css';
import { useState } from 'react'
import DarkTheme from './components/DarkTheme'

function App() {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [currentFail, setCurrentFail] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const dataWords = ['Doris enjoyed tapping her nails on the table to annoy everyone. He had reached the point where he was paranoid about being paranoid.',
    'The fox in the tophat whispered into the ear of the rabbit. He had reached the point where he was paranoid about being paranoid. Just some few more words.',
    'He had reached the point where he was paranoid about being paranoid. He played the game as if his life depended on it and the truth was that it did.',
    'She had the gift of being able to paint songs. The fox in the tophat whispered into the ear of the rabbit. Hello how are you my friend ?',
    'He played the game as if his life depended on it and the truth was that it did. She saw the brake lights, but not in time. Do you want a cookie ?',
    'She saw no irony asking me to change but wanting me to accept her for who she is. The fog was so dense even a laser decided it wasn\'t worth the effort.',
    'She saw the brake lights, but not in time. If you really strain your ears, you can just about hear the sound of no one giving a damn. One percent better every day.',
    'If you really strain your ears, you can just about hear the sound of no one giving a damn. She had the gift of being able to paint songs.',
    'Last Friday I saw a spotted striped blue worm shake hands with a legless lizard. She saw the brake lights, but not in time. This is working!',
    'The fog was so dense even a laser decided it wasn\'t worth the effort. He had reached the point where he was paranoid about being paranoid.']

  const handleClick = () => {
    const index = Math.floor(Math.random() * 10);
    const newWords = dataWords[index].split(' ');

    setWords(newWords);
    setCurrentIndex(0);
    setInput('');
    setStartTime(Date.now());
    setMistakes(0);
    setWpm(0);
  }

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      if (words[currentIndex] === input) {
        setCurrentIndex(currentIndex + 1);
        setInput('');
        setCurrentFail(false);
      } else {
        setCurrentFail(true);
        setMistakes(mistakes + 1);
      }
      // if (currentIndex === words.length - 1) {
        
      // }
      const endTime = Date.now();
      const timeTaken = (endTime - startTime) / 1000; // convert to seconds
      const numWords = words.length;
      const currWpm = Math.round(numWords / (timeTaken / 60)); // calculate WPM
      setWpm(currWpm);
    }
  }

  return (
    <>
    <DarkTheme/>
    <div className='container'>
      <div className='words'>
        {words.map((word, index) => {
          if (index < currentIndex) {
            return (
              <p key={index} className='correct'> {word} </p>
            )} else if (index === currentIndex && currentFail === true) {
              return (
                <p key={index} className='incorrect'> {word} </p>
              )
            } else { 
              return (
                <p key={index}> {word} </p>
            )}
              })}
      </div>
      <div className='footer'>
        <input onChange={handleChange} value={input} onKeyDown={handleKeyDown}></input>
        <p>Your wpm: {wpm}</p>
        <p>Mistakes: {mistakes}</p>
        <button onClick={handleClick}>GO</button>
      </div>
    </div>
    </>
  );
}

export default App;
