import './App.css';

function App() {
  return (
    <>
      <h1> Turn the switch </h1>
      <DarkMode />
    </>
  );
}

function DarkMode() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
    localStorage.setItem("selectedTheme", "dark");
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
    localStorage.setItem("selectedTheme", "light");
  }

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }

  return (
    <div className='dark_mode'>
        <label className='dark_mode_label' for='darkmode-toggle'>
          <input 
            className='dark_mode_inpout'
            type='checkbox'
            id='darkmode-toggle'
            onChange={toggleTheme}
            defaultChecked={selectedTheme === "dark"}
            />
            <span class="slider round"></span>
        </label>
    </div>
  )
}

export default App;