import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/add' element={<Home />} /> */}
          {/* <Route path='/puppies/:id' element={<Puppy />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
