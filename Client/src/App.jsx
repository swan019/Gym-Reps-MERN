import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NewWorkoutForm from './components/NewWorkoutForm';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/form" element={<NewWorkoutForm  />} /> */}

          </Routes>
          
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;