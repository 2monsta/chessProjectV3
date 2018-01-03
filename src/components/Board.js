import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import Rook from './Rook';
import Bishop from './Bishop';
import Queen from './Queen';
import {moveKnight, canMoveKnight, moveRook, canMoveRook, canMoveQueen, moveQueen} from '../Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
class Board extends Component {
	
	// handleSquareClick(toX, toY) {
	// 	if (canMoveKnight(toX, toY)) {
	// 		moveKnight(toX, toY);
	// 	}
	// }

  renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		return (
			<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
				<BoardSquare x={x} y={y}>
					{this.renderPiece(x, y)}
				</BoardSquare>
			</div>
		);
	}
	renderPiece(x, y) {
		const [knightX, knightY] = this.props.knightPosition;
		const [rookX, rookY] = this.props.rookPosition;
		const [bishopX, bishopY] = this.props.bishopPosition;
		const [queenX, queenY] = this.props.queenPosition;
		if (x === knightX && y === knightY) {
			return <Knight name="knight"/>;
		}else if(x === rookX && y === rookY){
			return <Rook name="rook"/>
		}else if (x === bishopX && y === bishopY){
			return <Bishop name='bishop'/>
		}
		else if (x === queenX && y === queenY){
			return <Queen name='queen'/>
		}
	}


  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

export default DragDropContext(HTML5Backend)(Board);