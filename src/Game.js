let observer = null;
let rookPosition = [0,7];
let knightPosition = [1, 7];
let bishopPosition = [2, 7];
let queenPosition = [3, 7];
let rookPosition1 = [7,7];
let kingPosition = [4,7];
let bishopOnePosition = [5,7];
let knightOnePosition = [6,7];
let pawnPosition = [0,6];


function emitChange() {
  observer(knightPosition, rookPosition, bishopPosition, queenPosition, rookPosition1, kingPosition, bishopOnePosition, knightOnePosition, pawnPosition);
}
export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }
  observer = o;
  emitChange();
}

//KNIGHT MOVEMENT
export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
//KNIGHTONE MOVEMENT
export function moveKnightOne(toX, toY) {
  knightOnePosition = [toX, toY];
  emitChange();
}
export function canMoveKnightOne(toX, toY) {
  const [x, y] = knightOnePosition;
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
//ROOK MOVEMENT
export function canMoveRook(toX, toY){
	const [x, y] = rookPosition;
  const dx = toX - x;
	const dy = toY - y;
	// return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
	return (Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
	(Math.abs(dx) === 0 && Math.abs(dy) === 2) ||
	 (Math.abs(dx) === 0 && Math.abs(dy) === 3) || 
	 (Math.abs(dx) === 0 && Math.abs(dy) === 4) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 5) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 6) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 7) ||
		(Math.abs(dx) === 1 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 2 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 3 && Math.abs(dy) === 0) || 
	 	(Math.abs(dx) === 4 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 5 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 6 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 7 && Math.abs(dy) === 0);
}
export function moveRook(toX, toY){
	rookPosition = [toX, toY];
	emitChange();
}
//ROOK1 MOVEMENT
export function canMoveRook1(toX, toY){
	const [x, y] = rookPosition1;
  const dx = toX - x;
	const dy = toY - y;
	return (Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
	(Math.abs(dx) === 0 && Math.abs(dy) === 2) ||
	 (Math.abs(dx) === 0 && Math.abs(dy) === 3) || 
	 (Math.abs(dx) === 0 && Math.abs(dy) === 4) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 5) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 6) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 7) ||
		(Math.abs(dx) === 1 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 2 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 3 && Math.abs(dy) === 0) || 
	 	(Math.abs(dx) === 4 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 5 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 6 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 7 && Math.abs(dy) === 0);
}
export function moveRook1(toX, toY){
	rookPosition1 = [toX, toY];
	emitChange();
}
//BISHOP MOVEMENT
export function canMoveBishop(toX, toY){
	const [x, y] = bishopPosition;
  const dx = toX - x;
	const dy = toY - y;
	
	return (Math.abs(dx) === 1 && Math.abs(dy) === 1) || 
	Math.abs(dx) === 1 && Math.abs(dy) === 1 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 ||
	Math.abs(dx) === 3 && Math.abs(dy) === 3 || 
	Math.abs(dx) === 3 && Math.abs(dy) === 3 ||
	Math.abs(dx) === 4 && Math.abs(dy) === 4 || 
	Math.abs(dx) === 4 && Math.abs(dy) === 4 ||
	Math.abs(dx) === 5 && Math.abs(dy) === 5 || 
	Math.abs(dx) === 5 && Math.abs(dy) === 5 ||
	Math.abs(dx) === 6 && Math.abs(dy) === 6 || 
	Math.abs(dx) === 6 && Math.abs(dy) === 6 ||
	Math.abs(dx) === 7 && Math.abs(dy) === 7 || 
	Math.abs(dx) === 7 && Math.abs(dy) === 7;
}
export function moveBishop(toX, toY){
	bishopPosition = [toX, toY];
	emitChange();
}
//BISHOP MOVEMENT
export function canMoveBishopOne(toX, toY){
	const [x, y] = bishopOnePosition;
  const dx = toX - x;
	const dy = toY - y;
	return (Math.abs(dx) === 1 && Math.abs(dy) === 1) || 
	Math.abs(dx) === 1 && Math.abs(dy) === 1 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 ||
	Math.abs(dx) === 3 && Math.abs(dy) === 3 || 
	Math.abs(dx) === 3 && Math.abs(dy) === 3 ||
	Math.abs(dx) === 4 && Math.abs(dy) === 4 || 
	Math.abs(dx) === 4 && Math.abs(dy) === 4 ||
	Math.abs(dx) === 5 && Math.abs(dy) === 5 || 
	Math.abs(dx) === 5 && Math.abs(dy) === 5 ||
	Math.abs(dx) === 6 && Math.abs(dy) === 6 || 
	Math.abs(dx) === 6 && Math.abs(dy) === 6 ||
	Math.abs(dx) === 7 && Math.abs(dy) === 7 || 
	Math.abs(dx) === 7 && Math.abs(dy) === 7;
}
export function moveBishopOne(toX, toY){
	bishopOnePosition = [toX, toY];
	emitChange();
}
//QUEEN MOVEMENT
export function canMoveQueen(toX, toY){
	const [x, y] = queenPosition;
  const dx = toX - x;
	const dy = toY - y;
	return (Math.abs(dx) === 1 && Math.abs(dy) === 1) || 
	Math.abs(dx) === 1 && Math.abs(dy) === 1 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 || 
	Math.abs(dx) === 2 && Math.abs(dy) === 2 ||
	Math.abs(dx) === 3 && Math.abs(dy) === 3 || 
	Math.abs(dx) === 3 && Math.abs(dy) === 3 ||
	Math.abs(dx) === 4 && Math.abs(dy) === 4 || 
	Math.abs(dx) === 4 && Math.abs(dy) === 4 ||
	Math.abs(dx) === 5 && Math.abs(dy) === 5 || 
	Math.abs(dx) === 5 && Math.abs(dy) === 5 ||
	Math.abs(dx) === 6 && Math.abs(dy) === 6 || 
	Math.abs(dx) === 6 && Math.abs(dy) === 6 ||
	Math.abs(dx) === 7 && Math.abs(dy) === 7 || 
	Math.abs(dx) === 7 && Math.abs(dy) === 7 ||
	(Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
	(Math.abs(dx) === 0 && Math.abs(dy) === 2) ||
	 (Math.abs(dx) === 0 && Math.abs(dy) === 3) || 
	 (Math.abs(dx) === 0 && Math.abs(dy) === 4) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 5) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 6) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 7) ||
		(Math.abs(dx) === 1 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 2 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 3 && Math.abs(dy) === 0) || 
	 	(Math.abs(dx) === 4 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 5 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 6 && Math.abs(dy) === 0) ||
		(Math.abs(dx) === 7 && Math.abs(dy) === 0);
}
export function moveQueen(toX, toY){
	queenPosition = [toX, toY];
	emitChange();
}
//KING MOVEMENT
export function canMoveKing(toX, toY){
	const [x, y] = kingPosition;
  const dx = toX - x;
	const dy = toY - y;
	return (Math.abs(dx) === 1 && Math.abs(dy) === 1) ||
		(Math.abs(dx) === 0 && Math.abs(dy) === 1) ||
		(Math.abs(dx) === 1 && Math.abs(dy) === 0)
}
export function moveKing(toX, toY){
	kingPosition = [toX, toY];
	emitChange();
}


//PAWN MOVEMENT
export function canMovePawn(toX, toY){
	const [x, y] = pawnPosition;
  const dx = toX - x;
	const dy = toY - y;
	return (dx === 0 && dy === -1) || (dx === 0 && dy === -2)
}
export function movePawn(toX, toY){
	pawnPosition = [toX, toY];
	emitChange();
}
