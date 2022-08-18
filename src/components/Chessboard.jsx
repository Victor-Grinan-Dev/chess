import React from 'react';
import Tile from './Tile';
import allPieces from './pieces';

const verticalAxis = new Array(8).fill(1).map((num, i)=> num + i );
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const pieces = {
    pawn_w:'assets/pawn_w.png',
    pawn_b:'assets/pawn_b.png',
}

//const piece = {
//    pieceName:"",
//    image:"",
//    x:null,
//    y:null,
//}

let board = [];
let color;
for(let j = verticalAxis.length - 1; j >= 0 ; j--){
    for(let i = 0; i < horizontalAxis.length; i++){  
        ( i + j ) % 2 === 0 ? color = "black" : color = "white";
        board.push({id:`${horizontalAxis[i]}${verticalAxis[j]}`, color:color});
    }
}

function Chessboard() {
    
  return (
    <div className="chessboard">    
        {board.map((tile)=>(
        <Tile key={tile.id} id={tile.id} color={tile.color} imageUrl={pieces["pawn_b"]} />
    ))}
    </div>
  )
}

export default Chessboard