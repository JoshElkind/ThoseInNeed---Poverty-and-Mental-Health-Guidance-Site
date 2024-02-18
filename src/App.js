import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Services from './Pages/Services';

import About from './Pages/About';
import Contact from './Pages/Contact'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import './App.css';



function App() {
  const [lat,setLat]=useState()
  const [lon,setLon]=useState()


  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position)=> {
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
      })
    }, []);
    

    return (
      
      <div className="App">
  
        
        
        <Header />
    
        <Services longitude={lon} latitude={lat} />
        <About />
        <Contact/>
        <Footer/>

        <Router>
          <Navigation>
            <Routes>
              <Route exact path="/" element={<Services />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </Navigation>
        </Router>
      </div>
    );
}

export default App;
