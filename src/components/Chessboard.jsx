import React, { useEffect, useRef } from 'react';
import Tile from './Tile';
import allPieces from './pieces';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const board = [];
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

function Chessboard() {
  const ref = useRef();
  const offset = 20;
  let activePiece = null;

const grabPiece = (e) =>{
  //By pure testing I found that the offset of my app/display is 275px, migth not work in other displays.

  posX = parseInt(e.target.className.split(' ')[1],10);
  posY = parseInt(e.target.className.split(' ')[2],10);
  if (e.target.className.includes('piece')) {
    e.target.style.position = "absolute";//is mandatory to be position absolute
    e.target.style.left = `${e.clientX - offset }px`//20 is the half of the tile size
    e.target.style.top = `${e.clientY - offset }px`;
  }

  activePiece = e.target;
}

const movePiece = (e) => {
  if (e.target.className.includes('piece')) {
 
  if (activePiece) {
    activePiece.style.position = "absolute";
    activePiece.style.left = `${e.clientX - offset }px`
    activePiece.style.top = `${e.clientY  -  offset}px`   
  }
}
}

const dropPiece = (e) => {
  if(activePiece){
    activePiece = null;
  }
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
          /> 
        ))}
    </div>
  )
}

export default Chessboard;

/*
const ref = useRef(null);

  useEffect(() => {
    console.log('className 👉️', ref.current.className);

    // 👇️ check if element contains class
    if (ref.current.classList.contains('piece')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  }, []);

  const handleClick = event => {
    console.log('className 👉️', event.currentTarget.className);

    // 👇️ check if element contains class
    if (event.currentTarget.classList.contains('piece')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  };
*/