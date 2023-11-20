import './App.css';
import Login from './Components/Login/Login';
//import Signup from './Components/Signup/Signup';
import Home from './App/Home/Home'
import About from './App/About/About'
import Contact from './App/Contact/Contact'
import Jobs from './App/Job/Job'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/jobs" element={<Jobs />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
