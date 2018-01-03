import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './components/Board';
import Square from './components/Square';
import { observe } from './Game';


const rootEl = document.getElementById('root');
observe(function (knightPosition, rookPosition,bishopPosition, queenPosition, rookPosition1){
  ReactDOM.render(
    <Board 
		knightPosition={knightPosition} 
		rookPosition={rookPosition} 
		bishopPosition={bishopPosition} 
		queenPosition={queenPosition}
		rookPosition1 = {rookPosition1}/>,
    rootEl
  )}
);
