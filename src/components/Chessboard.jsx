import React from 'react';
import Tile from './Tile';
import allPieces from './pieces';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

let board = [];
let color;

for(let j = verticalAxis.length - 1; j >= 0 ; j--){
    for(let i = 0; i < horizontalAxis.length; i++){  
        let imageUrl = undefined;
        ( i + j ) % 2 === 0 ? color = "black" : color = "white";
        allPieces.forEach(piece => {
          if(piece.x === i && piece.y === j){
            imageUrl = piece.image;
          }
        })
        board.push({id:`${horizontalAxis[i]}${verticalAxis[j]}`, color:color, x:i, y:j, image:imageUrl});

    }
}

function Chessboard() {

  return (
    <div className="chessboard">    
        {board.map((tile)=>(
          <Tile key={tile.id} id={tile.id} color={tile.color} imageUrl={tile.image} /> 
        ))}
    </div>
  )
}

export default Chessboard