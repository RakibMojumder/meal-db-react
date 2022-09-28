import logo from './logo.svg';
import './App.css';
import Meal from './components/Meal/Meal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <Meal></Meal>
    </div>
  );
}

export default App;
