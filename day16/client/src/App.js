import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetUser from './components/GetUser'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element ={<Login />}/>
          <Route path='/getuser' element={<GetUser />}>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
