import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Container from '@material-ui/core/Container';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <Container>
                <Settings />
                <Dashboard />
            </Container>
        </div>
    );
};

export default App;
