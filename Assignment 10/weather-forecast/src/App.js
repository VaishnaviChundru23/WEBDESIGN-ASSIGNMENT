
import './App.css';
import WeekData from './components/WeekData'
import HourData from './components/HourData'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WeekData />} />
          <Route path='/weather/:day' element={<HourData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
