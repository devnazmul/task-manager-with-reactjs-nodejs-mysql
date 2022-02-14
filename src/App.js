import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  // const [isAuthenticate,setIsAuthenticate] =useState(false);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
