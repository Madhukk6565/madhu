import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Reccomondedfood from './components/Reccomondedfood';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Food, { Carousel } from './components/Carousel';
import Login from './components/Login';
import Favorite from './components/Favorite';
import Nutrition from './components/Nutrition';
import Meal from './components/Meal';
import SignUp from './components/SignUp';
import Recom from './components/Recom';
import { Trial } from './components/Trial';
import Loginpage from './components/Loginpage';
import Registration from './components/Registration';
import Newlogin from './components/Newlogin';
import Newfav from './components/Newfav';





function App() {
  return (
    <div>
      <Router>
        <Routes>        
          <Route path="/R" element={<Reccomondedfood />} />         
          <Route path="/Fav" element={<Favorite />} />
          <Route path="/N" element={<Nutrition />} />
          <Route path="/H" element={<Carousel />} />
          <Route path="/M" element={<Meal />} />
          <Route path="/S" element={<SignUp />} />
          <Route path="/T" element={<Recom />} />
          <Route path="/" element={<Loginpage/>} />         
          </Routes>
      </Router>        
    </div>
  )
}

export default App;
