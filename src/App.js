import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Settings />
      <Dashboard />
    </div>
  );
};

export default App;
