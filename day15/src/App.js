import './App.css';
import { useState } from 'react';
import Darktheme from './components/Darktheme';

function App() {
  const [faq, setFaq] = useState({
    question1: {
      question: 'Who am I?',
      answer: 'I\'m Zackary Devove, an aspiring full stack web developer, currently learning the MERN stack.',
      className: 'hidden'
    },
    question2: {
      question: 'What is this for?',
      answer: 'This is for my 30 days 30 projects challenge!',
      className: 'hidden'
    },
    question3: {
      question: 'Who painted the Mona Lisa?',
      answer: 'Me of course',
      className: 'hidden'
    },
    question4: {
      question: 'What\'s a programmer\'s favorite place to hang out?',
      answer: 'Github',
      className: 'hidden'
    },
    question5: {
      question: 'Why don\'t programmers like nature?',
      answer: 'Because there\'s no Wi-Fi in the forest',
      className: 'hidden'
    }
  })

  function handleClick(key) {
    const newFaq = {
      ...faq,
      [key]: {
        ...faq[key],
        className: faq[key].className === 'hidden' ? 'open' : 'hidden',
      },
    };

    setFaq(newFaq);
  }


  return (
    <div className='container'>
      <Darktheme />
      <h1>Frequently Asked Questions</h1>
      {Object.keys(faq).map((key) => {
        const item = faq[key];
        return (
          <div key={key} className={item.className === 'hidden' ? 'section' : 'section-open'} onClick={() => handleClick(key)}>
              <h2>{item.question}</h2>
            <div className={item.className}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
