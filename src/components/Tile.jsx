import React from 'react';

const colors = {
    black:"#779556",
    white:"#ebecd0"
}

function Tile({tileId, pieceName, color, imageUrl, draggable}) {
  const showEvent = (e) => {
    console.log(e)
  }
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
        target.style.display ="none";
    }, 0);
}

const dragOver = e => {
    e.stopPropagation();
}

  return (
    <div 
        
        id={tileId}
        className="tile"
        style={{
            backgroundColor:`${colors[color]}`,
           
        }}
        >    
       
          {
            // if there is an image render this div
            imageUrl && <div 
              id={pieceName + ' ' + tileId}
              className='piece' 
              onClick={showEvent}
              draggable = {draggable}
              onDragStart={dragStart}
              onDragOver={dragOver}
              style={{
                  backgroundImage:`url(${imageUrl})`
              }}>    
          </div>
          }
    </div>
  )
}

export default Tile;