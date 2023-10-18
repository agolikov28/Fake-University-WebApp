import './App.css';
import { Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Events from './components/pages/Events';
import Academics from './components/pages/Academics';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    
      <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/events" exact element={<Events />}/>
            <Route path="/academics" exact element={<Academics />}/>
            <Route path="/sign-up" exact element={<SignUp />}/>
          </Routes>      
          <Footer/>        
        </div>
  );
}

export default App;
