import './App.css';
import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import Login from "./pages/Login";
import { useForm } from 'react-hook-form';

import{ BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <StyledContainer>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </StyledContainer>
    </Router>
   
   ); 
}

export default App;
