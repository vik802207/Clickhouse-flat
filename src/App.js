import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
// import './App.css'
import LoadColumn from './components/LoadColumn';
import FlatFileForm from './components/FlatFileForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
<Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home />} />
          <Route path="/queryform" element={<LoadColumn />} />
        </Routes>
    </Router>
  );
};

export default App;
