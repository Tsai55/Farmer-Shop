import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DeliveryPartner from './screens/DeliveryPartner';
import User from './screens/User';
import Home from './screens/Home';


import Supplying from './screens/Supplying';


import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './screens/Container';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/user" element={<User />} />
        <Route path="/delivery-partner" element={<DeliveryPartner />} />
        <Route path="/container" element = {<Home />} />
        <Route path="/Supplying" element={<Supplying />} />
       
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;