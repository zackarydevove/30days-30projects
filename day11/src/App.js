import './App.css';

function App() {
  return (
    <div className='container'>
      
      <div className='left'>
        <h3 className="course">Course</h3>
        <h1>Javascript Fundamentals</h1>
        <h3 className="chapters">View all chapters > </h3>
      </div>

      <div className='right'>
        <div className="top">
          <h3>Chapter 4</h3>
          <div className="top-right">
            <div className="progress" />
            <h4> 6/9 Challenges </h4>
          </div>
        </div>

        
        <h1>Callbacks & Closures</h1>
        <button >Continue</button>

      </div>
    </div>
  );
}

export default App;
