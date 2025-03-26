import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"; // Ensure this component exists and is correctly imported

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black-100'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />

        
        
        
        
        
        
        
        
        
        
        
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;