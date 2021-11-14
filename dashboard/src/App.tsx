import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar';
import {BrowserRouter as Router} from "react-router-dom";
import Leaderboard from './Pages/Leaderboard/Leaderboard';

function App() {
  return (
    <Router>
      <Sidebar />
      <Leaderboard />
    </Router>

  );
}

export default App;
