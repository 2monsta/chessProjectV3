import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import { canMoveKnight, moveKnight, canMoveRook, moveRook, canMoveBishop, 
	moveBishop, canMoveQueen, moveQueen, 
	moveRook1,canMoveRook1, canMoveKing, moveKing, canMoveBishopOne, moveBishopOne,
	moveKnightOne, canMoveKnightOne} from '../Game';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';


const squareTarget = {
	canDrop(props, monitor) {
		console.log(monitor.getItemType());
		// can switch to switch statements later to look better
		if(monitor.getItemType() === "knight"){
			return canMoveKnight(props.x, props.y);
		}else if(monitor.getItemType() === "knightone"){
			return canMoveKnightOne(props.x, props.y);
		}
		else if (monitor.getItemType()==="rook"){
			return canMoveRook(props.x, props.y);
		}else if(monitor.getItemType() ==='bishop'){
			return canMoveBishop(props.x, props.y);
		}
		else if(monitor.getItemType() ==='bishopone'){
			return canMoveBishopOne(props.x, props.y);
		}
		else if(monitor.getItemType() ==='queen'){
			return canMoveQueen(props.x, props.y);
		}else if (monitor.getItemType()==="rookone"){
			return canMoveRook1(props.x, props.y);
		}else if (monitor.getItemType()==="king"){
			return canMoveKing(props.x, props.y);
		}
  },
  drop(props, monitor) {
		// can switch to switch statements later to look better
		if(monitor.getItemType() === "knight"){
			return moveKnight(props.x, props.y);
		}else if(monitor.getItemType() === "knightone"){
			return moveKnightOne(props.x, props.y);
		}
		else if (monitor.getItemType()==="rook"){
			return moveRook(props.x, props.y);
		}else if (monitor.getItemType()==="bishop"){
			return moveBishop(props.x, props.y);
		}else if (monitor.getItemType()==="bishopone"){
			return moveBishopOne(props.x, props.y);
		}
		else if (monitor.getItemType()==="queen"){
			return moveQueen(props.x, props.y);
		}else if (monitor.getItemType()==="rookone"){
			return moveRook1(props.x, props.y);
		}else if (monitor.getItemType()==="king"){
			return moveKing(props.x, props.y);
		}
	},
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
  };
}

class BoardSquare extends Component {
  renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }

  render() {
    const { x, y, connectDropTarget, isOver, canDrop } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}

export default DropTarget([ItemTypes.KNIGHT, ItemTypes.ROOK, ItemTypes.BISHOP, ItemTypes.QUEEN, ItemTypes.ROOKONE, ItemTypes.KING, ItemTypes.BISHOPONE, ItemTypes.KNIGHTONE], squareTarget, collect)(BoardSquare);