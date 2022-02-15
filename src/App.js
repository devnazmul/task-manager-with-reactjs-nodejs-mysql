
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateTaskForm from './components/UpdateTaskForm';
import Home from './pages/Home';

function App() {
  // const [isAuthenticate,setIsAuthenticate] =useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<UpdateTaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
