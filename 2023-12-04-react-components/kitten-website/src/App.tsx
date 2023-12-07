import React from 'react';
import logo from './logo.svg';
import './App.css';
import Kitten from './components/animals/kitten/Kitten';
import KittenFood from './components/food/kitten-food/KittenFood';

function App() {
    return (
        <div>
            <h1>Our First react app</h1>
            <Kitten />
            <Kitten />
            <Kitten />
            <KittenFood />
        </div>
    );
}

export default App;
