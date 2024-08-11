import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import WorkoutPlan from './components/WorkoutPlan';
import NutritionPlan from './components/NutritionPlan';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/workout" element={<WorkoutPlan />} />
            <Route path="/nutrition" element={<NutritionPlan />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;