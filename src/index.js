import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './components/Board';
import Knight from './components/Knight';
import Square from './components/Square';
import { observe } from './Game';


const rootEl = document.getElementById('root');
observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);