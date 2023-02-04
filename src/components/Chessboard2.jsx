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


const grabPiece = (e) =>{
  console.log(e.currentTarget.classList)
/*
  const element = e.currentTarget;
  if (element.classList.contains('piece')) {
    console.log(e.currentTarget.classList)

    const x = e.clientX ;
    const y = e.clientY ;
    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.left = `${y}px`;
  }
*/
  
}


const Chessboard = () => {
  

  const drop = (e) => {
    //e.preventDefault();
    const card_id= e.dataTransfer.getData('card_id');
    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
  }

  const dragOver = e => {
      e.preventDefault();
  }

  return (
    <div 
      className="chessboard"
      onDrop={drop}
      onDragOver={dragOver}
      onMauseUp={activePiece = null}
      onClick={grabPiece}
    >    
        {board.map((tile)=>(
          <Tile 
          key={tile.id} 
          tileId={tile.id} 
          pieceName={tile.pieceName}
          color={tile.color} 
          imageUrl={tile.image} 
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