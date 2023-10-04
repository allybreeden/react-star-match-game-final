import './App.css';
import React, { useState, useEffect } from 'react';
import utils from './math-utils';
import Game from './components/Game';

    const StarMatch = () => {
      const [gameId, setGameId] = useState(1);
      return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
    }
    
export default function App() {
  return (
    <StarMatch />
  )
}