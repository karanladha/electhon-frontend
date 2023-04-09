import logo from './logo.svg';

import LoginSignUp from './components/LoginSignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SlotBooking from './pages/SlotBooking';
import Travelre from './components/Travelre'

function App() {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<LoginSignUp />} />
        <Route path='/slotbooking' element={<SlotBooking />} />
        <Route path='/Travelre' element={<Travelre />} />
      </Routes>
    </BrowserRouter>

     
    </>
  );
}

export default App;
