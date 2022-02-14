import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  const [isAuthenticate,setIsAuthenticate] =useState(false);
  return (
    <div className="App">
      {isAuthenticate ? <Home /> : <Login />}
    </div>
  );
}

export default App;
