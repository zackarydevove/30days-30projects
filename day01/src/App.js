import './App.css';
import { useState } from 'react';
import data from './questions.json';

function App() {
  const [x, setX] = useState(1);
  // const [usedIndexes, setUsedIndexes] = useState([]);
  const [result, setResult] = useState(0);

  // const index = () => {
  //   let newIndex = Math.floor(Math.random() * 10) + 1;
  //   while (usedIndexes.includes(newIndex) && usedIndexes.length < 4) {
  //     newIndex = Math.floor(Math.random() * 10) + 1;
  //   }
  //   setUsedIndexes([...usedIndexes, newIndex]);
  //   return newIndex;
  // };

  const index = Math.floor(Math.random() * 10) + 1;
  const currentQuestion = data[`question${index}`].question;
  const currentAnswers = data[`question${index}`].answers;

  const handleClick = e => {
    setX(x + 1)
    if (data[`question${index}`].answer === e.target.value){
      setResult(result + 1);
    }
  }

  if (x <= 4){
    return (
      <>
        <form>
          <div className="left">
            <p>Question {x}/4</p>
            <p>{currentQuestion} </p>
          </div>
          <div className="right">
            {Object.keys(currentAnswers).map((key) => (
            <button key={key} 
                    type="button" 
                    className="answer"
                    value={currentAnswers[key]}
                    onClick={handleClick}> {currentAnswers[key]} </button>
            ))} 
          </div>
        </form>
      </>
    );
  }
  else {
    return (
      <div className="result">
        <p>You scored {result} out of 4 </p>
      </div>
    )
  }
}

export default App;
