import React, { useEffect } from 'react';
import Tile from './Tile';
import allPieces from './pieces';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const boardHeight = 320;
const boardWidth = 320;
const board = [];
//TODO: center this app in the screen
//add to the left value halve the extra_width of the screen.
//do same with top, 
//add a header/title for your app.
//add a clock to the top
const extra_width = window.innerWidth - boardWidth
console.log(extra_width);
let color;
let posX;
let posY;

for(let j = verticalAxis.length - 1; j >= 0 ; j--){
    for(let i = 0; i < horizontalAxis.length; i++){  
        let imageUrl = undefined;
        let pieceName;
        ( i + j ) % 2 === 0 ? color = "black" : color = "white";
        allPieces.forEach(piece => {
          if(piece.x === i && piece.y === j){
            imageUrl = piece.image;
            pieceName = piece.id
        }
        })
        board.push({id:`${horizontalAxis[i]}${verticalAxis[j]}`, pieceName, color:color, x:i, y:j, image:imageUrl});
    }
}

function Chessboard() {;
  const offset = 20;
  let activePiece = null;

  const grabPiece = (e) =>{
    posX = parseInt(e.target.className.split(' ')[1],10);
    posY = parseInt(e.target.className.split(' ')[2],10);
    if (e.target.className.includes('piece')) {
      e.target.style.position = "absolute";
      e.target.style.left = `${e.clientX - offset }px`;
      e.target.style.top = `${e.clientY - offset }px`;
    }
    activePiece = e.target;
  }

  const movePiece = (e) => { 
    if (activePiece) {
      activePiece.style.position = "absolute";
      let x;
      let y;
      if(e.clientX < (boardWidth - offset/2) && e.clientX > offset/2 ){
        x = e.clientX;
      }
      if(e.clientY < (boardHeight - offset/2) && e.clientY > offset/2){
        y = e.clientY;
      }
      activePiece.style.left = `${x - offset}px`
      activePiece.style.top = `${y  - offset}px`   
    }
  }
  const dropPiece = (e) => {
    e.preventDefault();
    if(activePiece){
      //e.target.parentNode.removeChild(e.target)
      activePiece = null;
      //activePiece.parentNode.removechild(activePiece)
      //activePiece = null;
    }
  }
  const printElement = (e) => {
    console.log(e.target)
  }
  return (
    <div 
      className="chessboard"
      onMouseDown={grabPiece}
      onMouseMove={movePiece}
      onMouseUp={dropPiece}
    >    
        {board.map((tile)=>(
          <Tile 
          key={tile.id} 
          tileId={tile.id} 
          draggable="true" 
          pieceName={tile.pieceName}
          color={tile.color} 
          imageUrl={tile.image} 
          coords={{x:tile.x, y:tile.y}}
          coordsInPx={{x:"pixels from left", y:"pixels from top"}}
          action={dropPiece}
          /> 
        ))}
    </div>
  )
}
export default Chessboard;
