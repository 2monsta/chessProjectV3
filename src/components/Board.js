import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import Knight from './Knight';
import Rook from './Rook';
import RookOne from './RookOne';
import Bishop from './Bishop';
import BishopOne from './BishopOne';
import Queen from './Queen';
import King from './King';
// import {moveKnight, canMoveKnight, moveRook, canMoveRook, canMoveQueen, moveQueen,} from '../Game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import KnightOne from './KnightOne';
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
		const [rookX1, rookY1] = this.props.rookPosition1;
		const [kingX, kingY] = this.props.kingPosition;
		const [bishopX1, bishopY1] = this.props.bishopOnePosition;
		const [knightX1, knightY1] = this.props.knightOnePosition;

		if (x === knightX && y === knightY) {
			return <Knight name="knight"/>;
		}else if(x ===knightX1 && y ===knightY1){
			return <KnightOne />
		}
		else if(x === rookX && y === rookY){
			return <Rook name="rook"/>
		}else if (x === bishopX && y === bishopY){
			return <Bishop name='bishop'/>
		}
		else if (x === bishopX1 && y === bishopY1){
			return <BishopOne name='bishop'/>
		}
		else if (x === queenX && y === queenY){
			return <Queen name='queen'/>
		}else if(x === rookX1 && y === rookY1){
			return <RookOne name="rook1"/>
		}else if(x === kingX && y === kingY){
			return <King name="king"/>
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