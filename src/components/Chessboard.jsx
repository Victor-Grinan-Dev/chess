import React, { useEffect, useRef } from 'react';
import Tile from './Tile';
import allPieces from './pieces';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

let board = [];
let color;

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

let activePiece = null;
const grabPiece = (e) =>{
  //By pure testing I found that the offset of my app/display is 125px, migth not work in other displays.
  const offset = 125;
  if (e.target.className.includes('piece')) {
    e.target.style.position = "absolute";
    e.target.style.left = `${e.clientX - offset }px`
    e.target.style.top = `${e.clienty - offset}px`;
  }

  activePiece = e.target;
}

const movePiece = (e) => {
  const offset = 125;
  if (activePiece && activePiece.className.includes('piece')) {
    activePiece.style.position = "absolute";
    activePiece.style.left = `${e.clientX - offset}px`
    activePiece.style.top = `${e.clientY - 300}px`;
  }
}

const dropPiece = (e) => {
  if(activePiece){
    activePiece = null;
  }
}

function Chessboard() {
  
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