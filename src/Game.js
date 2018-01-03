
let knightPosition = [1, 7];
let observer = null;
let rookPosition = [0,7];


function emitChange() {
  observer(knightPosition, rookPosition);
}


export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }
  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function moveRook(toX, toY){
	rookPosition = [toX, toY];
	emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export function canMoveRook(toX, toY){
	const [x, y] = rookPosition;
  const dx = toX - x;
	const dy = toY - y;
	// return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
	return (dx, dy);
}