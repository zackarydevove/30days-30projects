import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [button, setbutton] = useState(true);

  const handleClick = () => {
    setShowComponent(true);
    setbutton(false);
  }

  return (
    <div className="title">
      <h1>Want a Random Meal ?</h1>
      {button && <button onClick={handleClick}>GET MEAL</button>}
      {showComponent && <RandomMeal/>}
    </div>
  );
}

function RandomMeal() {

  const [meal, setmeal] = useState({});

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => setmeal(data.meals[0]));
  }, []);

  const handleClick = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => setmeal(data.meals[0]));
  }


  return (
    <div className="meal">
      <button onClick={handleClick}> GET MEAL </button>
      <div className="image-name">  
        <div className="info">
          <img src={meal.strMealThumb} alt={meal.strMeal} ></img>
          <h3 className="ingredient-list">Ingredient</h3>
          <ul>
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .filter(num => meal[`strIngredient${num}`])
              .map(num => (
                <li key={num}>
                  {meal[`strIngredient${num}`]} - {meal[`strMeasure${num}`]}
                </li>
              ))}
          </ul>
        </div>
        <div className="name-category-instruction">
          <h2>{meal.strMeal}</h2>
          <p>Category: {meal.strCategory}</p>
          <p className="instruction">Instruction: {meal.strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
